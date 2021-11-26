const query = document.location.search;
const params = new URLSearchParams(query);
const postID = params.get("id");

console.log(postID);

const headTitle = document.querySelector("title");
const headMetaText = document.querySelector("head");

const postContainer = document.querySelector(".postContainer");
const url = "https://vildehalvorsen.one/wp-json/wp/v2/posts/" + postID;

const blogPostTitle = document.querySelector("#blogPostTitle");


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

    blogPostTitle.innerHTML = `${results.title.rendered}`;

    postContainer.innerHTML = `<div class="content">
                                    <h1>${results.title.rendered}</h1>
                                    <p>${results.content.rendered}</p>
                                </div>`;

    modal.innerHTML = `${results.content.rendered}`;
}


/* Image modal */

const modal = document.querySelector(".modal");
const image = document.querySelector(".content img");


postContainer.onclick = function() {
    modal.style.display = "initial";
}

modal.onclick = function() {
    modal.style.display = "none";
}



/* Maybe this is something */



// async function getStuffFromAPI() {
//     const response = await fetch(url);
//     return await response.json();
// }


// function createHTML(post) {
//     modal.innerHTML = `<div>${post.content.rendered}</div>`;
//     setModalListener(container);
// }

// function setModalListener(container) {
//     const img = container.querySelector("img");

//     img.onclick = function(e) {
//         modal.style.display = "initial";
//     }
//     modal.onclick = function(e) {
//         modal.style.display = "none";
//     }
// }

// const post = getStuffFromAPI();
// createHTML(post);