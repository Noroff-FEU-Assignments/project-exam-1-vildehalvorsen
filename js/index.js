/* Latest Post */

const url = "http://vildehalvorsen.one/wp-json/wp/v2/posts?_embed&page/";
const latestPosts = document.querySelector(".latestPosts");
const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        for (let i = 0; i < results.length; i++) {
            const title = results[i].title.rendered;
            const content = results[i].content.rendered;

            console.log(results[i].id);

            if (i === 3) {
                break;
            }

            latestPosts.innerHTML += `<div class="slides">
                                        <a href="/specific.html?id=${results[i].id}">
                                            <div>${content}</div>
                                            <h3>${title}</h3>
                                        </a>
                                    </div>`;
        }



    } catch (error) {
        console.log(error);
        latestPosts.innerHTML = "OPS! something happened";
    }
}


getPosts();



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
    info.innerHTML = `
    Thank you
    for signing up!`;

    form.reset();
}

/* some functions are found in the validation.js-file */