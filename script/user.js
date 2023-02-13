let firstname = document.getElementById("firstname");
let surname = document.getElementById("surname");
let firstnameLabel = document.getElementById("firstnameLabel");
let surnameLabel = document.getElementById("surnameLabel");
let aboutMe = document.getElementById("aboutMe");
let email = document.getElementById("email");
let emailLabel = document.getElementById("emailLabel");
let phoneNumber = document.getElementById("phoneNumber");
let phoneNumberLabel = document.getElementById("phoneNumberLabel");
const imageInput = document.getElementById("imageInput");
var uploadedImage = "";
var firstnameCount = 0;
let firstnameResult2 = document.getElementById("firstnameResult2");
let lastnameResult2 = document.getElementById("lastnameResult2");
let emailResult2 = document.getElementById("emailResult2");
let phoneNumberResult2 = document.getElementById("phoneNumberResult2");
let aboutMeResult2 = document.getElementById("aboutMeResult2");

function failedValidation(labelID, inputID) {
  labelID.style.color = "red";
  inputID.style.borderColor = "red";
  inputID.style.backgroundImage = "none";
}

function acceptedValidation(inputID, labelID) {
  labelID.style.color = "black";
  inputID.style.borderColor = "#98E37E";
  inputID.style.backgroundImage = "url(../images/Checked-icon.png)";
}

function validateMin2Symbols(labelID, inputID) {
  function isGeorgian(inputID) {
    const GeorgianLetters = /^[\u10A0-\u10FF]+$/;
    return GeorgianLetters.test(inputID);
  }

  if (inputID.value.length < 2) {
    failedValidation(labelID, inputID);
  } else if (!isGeorgian(inputID.value)) {
    failedValidation(labelID, inputID);
  } else {
    acceptedValidation(inputID, labelID);
    return `${inputID} ${labelID}`;
  }
}

imageInput.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;
    document.getElementById(
      "profilePicture"
    ).style.backgroundImage = `url(${uploadedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
});

function checkImage() {
  let imageInputLabel = document.getElementById("imageInputLabel");
  if (!imageInput.value) {
    imageInputLabel.style.color = "red";
  } else {
    imageInputLabel.style.color = "black";
  }
}

function validateEmail() {
  if (!email.value.endsWith("@redberry.ge")) {
    failedValidation(emailLabel, email);
  } else {
    acceptedValidation(email, emailLabel);
  }
}

function validatePhoneNumber() {
  function isValidPhoneNumber(phoneNumber) {
    const phoneNumberPattern =
      /^\+995\s*\d{1}\s*\d{1}\s*\d{1}\s*\d{1}\s*\d{1}\s*\d{1}\s*\d{1}\s*\d{1}\s*\d{1}\s*$/;
    return phoneNumberPattern.test(phoneNumber);
  }
  isValidPhoneNumber(phoneNumber);
  if (!isValidPhoneNumber(phoneNumber.value)) {
    failedValidation(phoneNumberLabel, phoneNumber);
  } else {
    acceptedValidation(phoneNumber, phoneNumberLabel);
  }
}

function showResult(inputID, resultID) {
  resultID.innerHTML = inputID.value;
}

function hideHeader(inputID) {
  if (inputID.value) {
    let aboutMeHeader = document.getElementById("aboutMeHeader");
    aboutMeHeader.classList.remove("none");
    aboutMeHeader.classList.add("inline-block");
  } else {
    aboutMeHeader.classList.remove("inline-block");
    aboutMeHeader.classList.add("none");
  }
}

const api = "http://localhost:3000";

function addUser() {
  let user = {
    name: firstname.value,
    surname: surname.value,
    about: aboutMe.value,
    email: email.value,
    number: phoneNumber.value,
  };
  let url = `${api}/user`;

  fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
