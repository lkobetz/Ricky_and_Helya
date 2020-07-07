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
  changeModalAttending,
  checkUpdate
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
    console.log("found no errors");
    const alreadyRSVPd = await isInDB(lastName, firstName);
    if (!alreadyRSVPd[0] && !alreadyRSVPd[1]) {
      addToDB(
        attending,
        firstName,
        lastName,
        diet,
        plusOne,
        email,
        notAttending,
        changeModalName,
        changeModalAttending,
        showModal
      );
      resetForm(
        changeFirstName,
        changeLastName,
        changeEmail,
        changePlusOne,
        changeDiet,
        going,
        notGoing
      );
    } else if (alreadyRSVPd[0] || alreadyRSVPd[1]) {
      checkUpdate(true);
      changeError(
        `It looks like you've already RSVP'd, ${firstName}! Would you like to update your information?`
      );
    }
  }
}

export function addToDB(
  attending,
  firstName,
  lastName,
  diet,
  plusOne,
  email,
  notAttending,
  changeModalName,
  changeModalAttending,
  showModal
) {
  if (attending) {
    console.log("adding", firstName, lastName, "to guest list!");
    firebase
      .database()
      .ref("guests")
      .child(lastName.toLowerCase())
      .child(firstName.toLowerCase())
      .set({ dietaryRestrictions: diet, plusOne: plusOne, email: email });
    adjustGuestCount("add");
  } else if (notAttending) {
    console.log("adding", firstName, lastName, "to not attending list!");
    firebase
      .database()
      .ref("notAttending")
      .child(lastName.toLowerCase())
      .child(firstName.toLowerCase())
      .set({ email: email });
  }
  setModalInfo(changeModalName, changeModalAttending, firstName, attending);
  showModal(true);
}

function setModalInfo(
  changeModalName,
  changeModalAttending,
  firstName,
  attending
) {
  changeModalName(firstName);
  changeModalAttending(attending);
}

export function resetForm(
  changeFirstName,
  changeLastName,
  changeEmail,
  changePlusOne,
  changeDiet,
  going,
  notGoing
) {
  changeFirstName("");
  changeLastName("");
  changeEmail("");
  changePlusOne("");
  changeDiet("");
  going(false);
  notGoing(false);
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
  let notAttending = null;
  let attending = await firebase
    .database()
    .ref("guests")
    .child(lastName.toLowerCase())
    .child(firstName.toLowerCase())
    .once("value")
    .then(function (snapshot) {
      return snapshot.val();
    });
  if (!attending) {
    notAttending = await firebase
      .database()
      .ref("notAttending")
      .child(lastName.toLowerCase())
      .child(firstName.toLowerCase())
      .once("value")
      .then(function (snapshot) {
        return snapshot.val();
      });
  }
  return [attending, notAttending];
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function adjustGuestCount(op) {
  const oldCount = await firebase
    .database()
    .ref("guestCount")
    .once("value")
    .then(function (snapshot) {
      return snapshot.val();
    });
  const newCount = op === "add" ? oldCount + 1 : oldCount - 1;
  await firebase.database().ref("guestCount").set(newCount);
}

export async function deleteRSVP(
  firstName,
  lastName,
  changeError,
  checkUpdate
) {
  const attending = await isInDB(lastName, firstName);
  console.log("isInDB:", attending);
  const ref = attending[0] ? "guests" : "notAttending";
  console.log("ref:", ref);
  const finished = await firebase
    .database()
    .ref(ref)
    .child(lastName.toLowerCase())
    .child(firstName.toLowerCase())
    .remove();
  console.log("finished removing:", finished);
  if (ref === "guests") {
    await adjustGuestCount("minus");
  }
  changeError("");
  checkUpdate(false);
}
