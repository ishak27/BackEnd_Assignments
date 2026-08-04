const form = document.getElementById("feedbackForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const feedback = document.getElementById("feedback");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const courseError = document.getElementById("courseError");
const feedbackError = document.getElementById("feedbackError");

const output = document.getElementById("output");
const sessionUser = document.getElementById("sessionUser");

name.addEventListener("input", function () {
    nameError.textContent = "";
});

email.addEventListener("input", function () {
    emailError.textContent = "";
});

course.addEventListener("change", function () {
    courseError.textContent = "";
});

feedback.addEventListener("input", function () {
    feedbackError.textContent = "";
});

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    courseError.textContent = "";
    feedbackError.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Student Name is required";
        valid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
    }
    else if (!email.value.includes("@")) {
        emailError.textContent = "Enter a valid Email";
        valid = false;
    }

    if (course.value === "") {
        courseError.textContent = "Select a Course";
        valid = false;
    }

    if (feedback.value.trim() === "") {
        feedbackError.textContent = "Feedback is required";
        valid = false;
    }

    if (valid) {

        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("course", course.value);
        localStorage.setItem("feedback", feedback.value);

        sessionStorage.setItem("currentUser", name.value);

        displayData();

        form.reset();
    }

});

function displayData() {

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const course = localStorage.getItem("course");
    const feedback = localStorage.getItem("feedback");

    const currentUser = sessionStorage.getItem("currentUser");

    let message = "";

    if (name !== null && email !== null && course !== null && feedback !== null) {

        message += "<b>Name :</b> " + name + "<br>";
        message += "<b>Email :</b> " + email + "<br>";
        message += "<b>Course :</b> " + course + "<br>";
        message += "<b>Feedback :</b> " + feedback;

    }
    else {

        message += "No feedback stored.";

    }

    output.innerHTML = message;

    if (currentUser !== null) {

        sessionUser.innerHTML = "Current Session User : " + currentUser;

    }
    else {

        sessionUser.innerHTML = "";

    }

}
function deleteData() {

    localStorage.clear();
    sessionStorage.clear();
    output.innerHTML = "No feedback stored.";
    sessionUser.innerHTML = "";

}
displayData();