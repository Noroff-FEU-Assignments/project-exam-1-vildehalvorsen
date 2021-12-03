let pageNumber = 10;

function countNumber() {
    pageNumber += 10;
}

const url = "https://vildehalvorsen.one/wp-json/wp/v2/posts?per_page=";
const blogContainer = document.querySelector(".blogContainer");
const loadButton = document.querySelector("#loadMoreButton");
const globalButton = document.querySelector(".globalButton");


async function getList() {
    try {
        const response = await fetch(url + pageNumber);
        const results = await response.json();

        blogContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            const content = results[i].content.rendered;
            const title = results[i].title.rendered;
            const date = results[i].date;

            console.log(results[i].id);


            blogContainer.innerHTML += `<div class="blogPost">
                                            <a href="/blogSpecific.html?id=${results[i].id}">
                                                <div>${content}</div>
                                                <div class="contentInfo">
                                                <h3>${title}</h3>
                                                <h3 id="date">Published: ${date}</h3>
                                                </div>  
                                            </a>
                                        </div>`;

            if (pageNumber > results.length) {
                loadButton.innerText = "All good";
                loadButton.style = `background-color: grey;
                                    cursor: initial;
                                    opacity: 0.5;`;

            }
        }
    } catch (error) {
        console.log(error);
        blogContainer.innerHTML = error + errorMessage();
    }


}

getList();

loadButton.addEventListener("click", function() {
    countNumber();
    getList();
});