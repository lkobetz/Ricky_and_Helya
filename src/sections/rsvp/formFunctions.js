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
  changeDiet
) {
  event.preventDefault();
  if (!findErrors(firstName, lastName, email, changeError)) {
    changeError("");
    const alreadyRSVPd = await isInDB(lastName, firstName);
    if (!alreadyRSVPd) {
      firebase
        .database()
        .ref("guests")
        .child(lastName)
        .child(firstName)
        .set({ dietaryRestrictions: diet, plusOne: plusOne, email: email });
      changeFirstName("");
      changeLastName("");
      changeEmail("");
      changePlusOne("");
      changeDiet("");
      // showModal(true);
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
    .child(lastName)
    .child(firstName)
    .once("value")
    .then(function (snapshot) {
      return snapshot.val();
    });
  return result;
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
