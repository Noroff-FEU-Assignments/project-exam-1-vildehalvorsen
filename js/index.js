/* Latest Post */

const url = "http://vildehalvorsen.one/wp-json/wp/v2/posts?_embed/";
const latestPosts = document.querySelector(".latestPosts");
async function getPosts(url) {

    const response = await fetch(url);
    const results = await response.json();

    results.forEach(function(posts) {
        latestPosts.innerHTML +=
            `<a href="/blog.html?id=${posts.id}">
            <h3>${posts.title.rendered}</h3>
            </a>`;
    })

    console.log(url)
}

getPosts(url);






/* Sign Up Function*/

const info = document.querySelector(".info")
const form = document.querySelector("form");

const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateSignUpForm() {
    event.preventDefault();

    if (checkValue(fullName.value, 3)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkValue(fullName.value, 3) && validateEmail(email.value)) {
        submitSignUpForm();
    }

}

form.addEventListener("submit", validateSignUpForm);

function submitSignUpForm() {
    info.innerHTML = `Thank you for signing up!`;

    form.reset();
}

/* some functions are found in the validation.js-file */