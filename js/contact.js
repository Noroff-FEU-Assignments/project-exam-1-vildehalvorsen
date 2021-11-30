const formContainer = document.querySelector(".formContainer")
const form = document.querySelector("form");
const sendButton = document.querySelector("#sendButton");


const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const inputs = document.querySelector("input");

function validateContactForm() {
    event.preventDefault();

    if (checkValue(fullName.value, 5)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkValue(subject.value, 15)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkValue(message.value, 25)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (checkValue(fullName.value, 5) && validateEmail(email.value) && checkValue(subject.value, 15) && checkValue(message.value, 25)) {
        submitContactForm();
    }


}


form.addEventListener("submit", validateContactForm);


const validate = document.querySelector(".validation");

function submitContactForm() {
    validate.innerText = `Thanks! Your message has been sent!`;

    form.reset();

    setTimeout(function() {
        validate.innerText = "";
    }, 5000);
}