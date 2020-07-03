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
  changeModalName
) {
  event.preventDefault();
  if (!findErrors(firstName, lastName, email, changeError)) {
    changeError("");
    const alreadyRSVPd = await isInDB(lastName, firstName);
    if (!alreadyRSVPd) {
      firebase
        .database()
        .ref("guests")
        .child(lastName.toLowerCase())
        .child(firstName.toLowerCase())
        .set({ dietaryRestrictions: diet, plusOne: plusOne, email: email });
      incrementGuestCount();
      changeModalName(firstName);
      changeFirstName("");
      changeLastName("");
      changeEmail("");
      changePlusOne("");
      changeDiet("");
      showModal(true);
    } else if (alreadyRSVPd) {
      changeError(`It looks like you've already RSVP'd, ${firstName}!`);
    }
  }
}

function findErrors(firstName, lastName, email, changeError) {
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
  return false;
}

async function isInDB(lastName, firstName) {
  const result = await firebase
    .database()
    .ref("guests")
    .child(lastName.toLowerCase())
    .child(firstName.toLowerCase())
    .once("value")
    .then(function (snapshot) {
      return snapshot.val();
    });
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
