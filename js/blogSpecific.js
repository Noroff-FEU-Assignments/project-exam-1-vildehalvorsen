const query = document.location.search;
const params = new URLSearchParams(query);
const postID = params.get("id");

console.log(postID);

const headTitle = document.querySelector("title");
const headMetaText = document.querySelector("head");

const postContainer = document.querySelector(".postContainer");
const url = "https://vildehalvorsen.one/wp-json/wp/v2/posts/" + postID;

const blogPostTitle = document.querySelector("#blogPostTitle");

const modal = document.querySelector(".modal");
const exit = document.querySelector(".fa-times-circle");

async function getPostContent() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        postContainer.innerHTML = "";

        createPostHTML(results);

        if (createPostHTML) {
            const image = document.querySelector(".content img");
            const exit = document.querySelector(".fa-times-circle");

            image.onclick = function() {
                modal.style.display = "initial";
            }
            exit.onclick = function() {
                modal.style.display = "none";
            }
        }
        document.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    } catch (error) {
        console.log(error);
        postContainer.innerHTML = error + errorMessage();
    }
}

getPostContent();

function createPostHTML(results) {
    headTitle.innerText = `the UNIVERSE | ${results.title.rendered}`;
    headMetaText.innerHTML += `<meta name="description" content="A blog post called ${results.title.rendered}">`;

    blogPostTitle.innerHTML = `${results.title.rendered}`;

    postContainer.innerHTML = `<div class="content">
                                    <h1>${results.title.rendered}</h1>
                                    <p id="date">Published: ${results.date}</p>
                                    <p>${results.content.rendered}</p>
                                </div>`;

    modal.innerHTML += `${results.content.rendered}`;
}