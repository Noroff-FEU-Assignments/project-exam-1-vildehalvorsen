/* Latest Post */

const url = "https://vildehalvorsen.one/wp-json/wp/v2/posts?_embed&?page/";
const latestPosts = document.querySelector(".latestPosts");
const arrows = document.querySelector(".arrows");

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        latestPosts.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            const title = results[i].title.rendered;
            const content = results[i].content.rendered;

            console.log(results[i].id);

            latestPosts.innerHTML += `<div class="slides">
                                        <a href="/blogSpecific.html?id=${results[i].id}">
                                            <div>${content}</div>
                                            <h3>${title}</h3>
                                        </a>
                                    </div>`;
        }

    } catch (error) {
        console.log(error);
        latestPosts.innerHTML = error + errorMessage();

        if (error) {
            latestPosts.style = `flex-direction: column;
                                flex-wrap: wrap;
                                color: red;
                                text-align: center;
                                overflow: visible;`;
            arrows.style.display = "none";
        }
    }
}


getPosts();


/* Slide Function */

const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");


rightArrow.addEventListener("click", function() {
    let pixel;

    if (window.innerWidth < 1000) {
        pixel = 640;
    } else if (window.innerWidth < 1300) {
        pixel = 740;
    } else if (window.innerWidth < 1400) {
        pixel = 1110;
    } else {
        pixel = 1200;
    }

    latestPosts.scrollLeft += pixel;
});


leftArrow.addEventListener("click", function() {
    let pixel;

    if (window.innerWidth < 1000) {
        pixel = 640;
    } else if (window.innerWidth < 1300) {
        pixel = 740;
    } else if (window.innerWidth < 1400) {
        pixel = 1110;
    } else {
        pixel = 1200;
    }

    latestPosts.scrollLeft -= pixel;
});


/* Sign Up Function*/

const info = document.querySelector(".info")
const form = document.querySelector("form");

const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateSignUpForm() {
    event.preventDefault();

    if (checkValue(fullName.value, 5)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkValue(fullName.value, 5) && validateEmail(email.value)) {
        submitSignUpForm();
    }

}

form.addEventListener("submit", validateSignUpForm);

function submitSignUpForm() {
    info.innerHTML = `Thank you for signing up!`;
    info.style.color = "green";

    form.reset();
}

/* some functions are found in the validation.js-file in validation folder */