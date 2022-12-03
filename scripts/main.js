const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const mediaQuery = window.matchMedia("(min-width: 1000px)");

function handleScreenSizeChange(e) {
    var html = document.getElementsByTagName("html")[0];
    if (e.matches) {
        html.classList.remove("js");
        menuButton.setAttribute("aria-disabled", true);
        menu.classList.remove("menu-open");
    } else {
        html.classList.add("js");
        menuButton.setAttribute("aria-disabled", false);
    }
}

// Adds/removes a class to the menu ul so CSS can open/close the Nav menu
menuButton.addEventListener("click", () => {
    var openMenu = menu.classList.contains("menu-open");
    menuButton.setAttribute("aria-expanded", !openMenu);
    menu.classList.toggle("menu-open");
});

mediaQuery.addListener(handleScreenSizeChange);

// Adds class 'js' to html tag to detect if JavaScript is present for CSS
window.addEventListener('load', function() {
    handleScreenSizeChange(mediaQuery);
}, {once: true});