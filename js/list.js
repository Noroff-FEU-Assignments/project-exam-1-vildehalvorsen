const url = "https://vildehalvorsen.one/wp-json/wp/v2/posts?_embed&page/";
const blogContainer = document.querySelector(".blogContainer");


async function getList() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        blogContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            const title = results[i].title.rendered;
            const content = results[i].content.rendered;

            console.log(results[i].id);


            blogContainer.innerHTML += `<div class="blogList">
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


getList();