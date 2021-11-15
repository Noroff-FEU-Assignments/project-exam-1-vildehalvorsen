const hamburgerMenu = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-times");
const nav = document.querySelector("nav");

hamburgerMenu.onclick = function() {
    nav.style.display = "block";
}

cross.onclick = function() {
    nav.style.display = "none"
}