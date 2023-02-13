let position = document.getElementById("position");
let employer = document.getElementById("employer");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let jobDescription = document.getElementById("jobDescription");

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
  if (inputID.value.length < 2) {
    failedValidation(labelID, inputID);
  } else {
    acceptedValidation(inputID, labelID);
  }
}

function fillThis(labelID, inputID) {
  if (!inputID.value) {
    failedValidation(labelID, inputID);
  } else {
    acceptedValidation(inputID, labelID);
  }
}

function showResult(inputID, resultID) {
  resultID.innerHTML = inputID.value;
}

function addExperienceDiv() {
  let experienceDiv = document.getElementById("experienceDiv");
  var clone = experienceDiv.cloneNode(true);
  clone.id = "experienceDiv2";
  experienceDiv.after(clone);
  let inputContainer = document.getElementById("inputContainer");
  inputContainer.style.height = "1580px";
}

const api = "http://localhost:3000";

function getUserResult() {
  let firstnameResult1 = document.getElementById("firstnameResult1");
  let lastnameResult2 = document.getElementById("lastnameResult2");
  let emailResult2 = document.getElementById("emailResult2");
  let phoneNumberResult2 = document.getElementById("phoneNumberResult2");
  let aboutMeResult2 = document.getElementById("aboutMeResult2");
  fetch(`${api}/user`, { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      firstnameResult1.innerHTML = jsonData[1].name;
      lastnameResult2.innerHTML = jsonData[1].surname;
      emailResult2.innerHTML = jsonData[1].email;
      phoneNumberResult2.innerHTML = jsonData[1].number;
      aboutMeResult2.innerHTML = jsonData[1].about;
    });
}

function addExperience() {
  let experiences = {
    position: position.value,
    employer: employer.value,
    startDate: startDate.value,
    endDate: endDate.value,
    jobDescription: jobDescription.value,
  };
  let url = `${api}/experiences`;

  fetch(url, {
    method: "POST",
    body: JSON.stringify(experiences),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
