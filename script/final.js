function closePopUP() {
  let popup = document.getElementById("popup");
  popup.classList.add("none");
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

function getUserResult3() {
  let schoolNameResult = document.getElementById("schoolNameResult");
  let schoolDegreeResult = document.getElementById("schoolDegreeResult");
  let studyEndDateResult = document.getElementById("studyEndDateResult");
  let studyDescriptionResult = document.getElementById(
    "studyDescriptionResult"
  );

  fetch(`${api}/educations`, { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      schoolNameResult.innerHTML = jsonData[1].school;
      schoolDegreeResult.innerHTML = jsonData[1].degree;
      studyEndDateResult.innerHTML = jsonData[1].date;
      studyDescriptionResult.innerHTML = jsonData[1].studyDescription;
    });
}
