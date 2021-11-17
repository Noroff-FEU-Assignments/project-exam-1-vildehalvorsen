const query = document.location.search;
const params = new URLSearchParams(query);
const postID = params.get("id");

console.log(postID);

const headTitle = document.querySelector("title");
const headMetaText = document.querySelector("head");

const postContainer = document.querySelector(".postContainer");
const url = "https://vildehalvorsen.one/wp-json/wp/v2/posts/" + postID;


async function getPostContent() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        postContainer.innerHTML = "";

        createPostHTML(results);

    } catch (error) {
        console.log(error);
        postContainer.innerHTML = "OPS! something happened";
    }
}

getPostContent();

function createPostHTML(results) {
    headTitle.innerText = `the UNIVERSE | ${results.title.rendered}`;
    headMetaText.innerHTML += `<meta name="description" content="${results.title.rendered}">`;

    postContainer.innerHTML = `
                            <div class="content">
                                    <h1>${results.title.rendered}</h1>
                                    <p>${results.content.rendered}</p>
                            </div>`;
}


/* Image modal */

const modal = document.querySelector(".modal");

postContainer.onclick = function() {
    modal.style.display = "initial";
}

modal.onclick = function() {
    modal.style.display = "none";
}