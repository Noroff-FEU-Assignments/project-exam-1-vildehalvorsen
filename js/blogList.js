let pageNumber = 5;

function countNumber() {
    pageNumber += 5;
}

const url = "https://vildehalvorsen.one/wp-json/wp/v2/posts?per_page=";
const blogContainer = document.querySelector(".blogContainer");
const loadButton = document.querySelector("#loadMoreButton");


async function getList() {
    try {
        const response = await fetch(url + pageNumber);
        const results = await response.json();

        blogContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            const title = results[i].title.rendered;
            const content = results[i].content.rendered;

            console.log(results[i].id);

            blogContainer.innerHTML += `<div class="blogPost">
                                            <a href="/blogSpecific.html?id=${results[i].id}">
                                                <div>${content}</div>
                                                <h3>${title}</h3>    
                                            </a>
                                        </div>`;

        }
    } catch (error) {
        console.log(error);
        blogContainer.innerHTML = "OPS! something happened";
    }
}

getList();

loadButton.addEventListener("click", function() {
    countNumber();
    getList()

});