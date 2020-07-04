import firebase from "firebase";

export async function handleSubmit(
  event,
  changeError,
  lastName,
  firstName,
  diet,
  plusOne,
  email,
  changeFirstName,
  changeLastName,
  changeEmail,
  changePlusOne,
  changeDiet,
  showModal,
  changeModalName,
  attending,
  notAttending,
  going,
  notGoing,
  changeModalAttending
) {
  event.preventDefault();
  if (
    !findErrors(
      firstName,
      lastName,
      email,
      changeError,
      attending,
      notAttending
    )
  ) {
    changeError("");
    const alreadyRSVPd = await isInDB(lastName, firstName);
    if (!alreadyRSVPd) {
      if (attending) {
        firebase
          .database()
          .ref("guests")
          .child(lastName.toLowerCase())
          .child(firstName.toLowerCase())
          .set({ dietaryRestrictions: diet, plusOne: plusOne, email: email });
        incrementGuestCount();
      } else if (notAttending) {
        firebase
          .database()
          .ref("notAttending")
          .child(lastName.toLowerCase())
          .child(firstName.toLowerCase())
          .set({ email: email });
      }
      changeModalName(firstName);
      changeModalAttending(attending);
      changeFirstName("");
      changeLastName("");
      changeEmail("");
      changePlusOne("");
      changeDiet("");
      going(false);
      notGoing(false);
      showModal(true);
    } else if (alreadyRSVPd) {
      changeError(`It looks like you've already RSVP'd, ${firstName}!`);
    }
  }
}

function findErrors(
  firstName,
  lastName,
  email,
  changeError,
  attending,
  notAttending
) {
  if (!firstName) {
    changeError("Please enter your first name.");
    return true;
  }
  if (!lastName) {
    changeError("Please enter your last name.");
    return true;
  }
  if (!email) {
    changeError("Please enter your email address.");
    return true;
  }
  if (!emailIsValid(email)) {
    changeError("The email address is not formatted correctly.");
    return true;
  }
  if (!attending && !notAttending) {
    changeError("Please check one of the boxes.");
    return true;
  }
  if (attending && notAttending) {
    changeError("Please select only one box.");
    return true;
  }
  return false;
}

async function isInDB(lastName, firstName) {
  let result = await firebase
    .database()
    .ref("guests")
    .child(lastName.toLowerCase())
    .child(firstName.toLowerCase())
    .once("value")
    .then(function (snapshot) {
      return snapshot.val();
    });
  if (!result) {
    result = await firebase
      .database()
      .ref("notAttending")
      .child(lastName.toLowerCase())
      .child(firstName.toLowerCase())
      .once("value")
      .then(function (snapshot) {
        return snapshot.val();
      });
  }
  return result;
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function incrementGuestCount() {
  const oldCount = await firebase
    .database()
    .ref("guestCount")
    .once("value")
    .then(function (snapshot) {
      return snapshot.val();
    });
  const newCount = oldCount + 1;
  await firebase.database().ref("guestCount").set(newCount);
}
