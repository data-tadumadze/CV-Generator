let schoolName = document.getElementById("schoolName");
let schoolDegree = document.getElementById("schoolDegree");
let studyEndDateResult = document.getElementById("studyEndDateResult");
let studyDescription = document.getElementById("studyDescription");

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

const api = "http://localhost:3000";

function getUserResult() {
  let firstnameResult = document.getElementById("firstnameResult");
  let lastnameResult = document.getElementById("lastnameResult");
  let emailResult = document.getElementById("emailResult");
  let phoneNumberResult = document.getElementById("phoneNumberResult");
  let aboutMeResult = document.getElementById("aboutMeResult");

  fetch(`${api}/user`, { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      firstnameResult.innerHTML = jsonData[1].name;
      lastnameResult.innerHTML = jsonData[1].surname;
      emailResult.innerHTML = jsonData[1].email;
      phoneNumberResult.innerHTML = jsonData[1].number;
      aboutMeResult.innerHTML = jsonData[1].about;
    });
}

function getUserResult2() {
  let positionResult = document.getElementById("positionResult");
  let employerResult = document.getElementById("employerResult");
  let startDateResult = document.getElementById("startDateResult");
  let endDateResult = document.getElementById("endDateResult");
  let jobDescriptionResult = document.getElementById("jobDescriptionResult");

  fetch(`${api}/experiences`, { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      positionResult.innerHTML = jsonData[1].position;
      employerResult.innerHTML = jsonData[1].employer;
      startDateResult.innerHTML = jsonData[1].startDate;
      endDateResult.innerHTML = jsonData[1].endDate;
      jobDescriptionResult.innerHTML = jsonData[1].jobDescription;
    });
}

function addEducation() {
  let educations = {
    school: schoolName.value,
    degree: schoolDegree.value,
    date: studyEndDate.value,
    studyDescription: studyDescription.value,
  };
  let url = `${api}/educations`;

  fetch(url, {
    method: "POST",
    body: JSON.stringify(educations),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
