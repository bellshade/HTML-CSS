$(".nav-item, .goTop").on("click", function (e) {
    let href = $(this).attr("href");
    let hrefElement = $(href);

    $("html, body").animate(
        {
            scrollTop: hrefElement.offset().top - 80,
        },
        1250,
        "easeInOutExpo"
    );

    e.preventDefault();
});




/** Navbar on scroll function */
window.onscroll = windowScroll;

function windowScroll(e) {    
    const navbar = document.querySelector(".navbar");
    const goTop = document.querySelector(".goTop");
    const navbarClass = "navbar navbar-expand-lg navbar-light fixed-top";
    const goTopClass = "goTop btn btn-secondary fixed-bottom mr-3 mb-3 ml-auto border-0";
    let offset = window.pageYOffset;

    if (offset > 70) {
        navbar.style.filter = "drop-shadow(0 6px 4px rgba(0, 0, 0, 0.1))";
        navbar.style.backgroundColor = "var(--background-secondary)";
        goTop.className = goTopClass;
    } else {
        navbar.style.filter = "";
        navbar.style.backgroundColor = "var(--background)";
        goTop.className = goTopClass + " d-none";
    }
}

// Script mengganti tema
const btnChangeTheme = document.querySelector(".btnChangeTheme");
const btnChangeThemeI = document.querySelector(".btnChangeTheme i");
const html = document.querySelector("html");
const hours = new Date().getHours();

btnChangeTheme.addEventListener("click", function(event) {
    if (html.dataset.colorMode === "light") {
        html.dataset.colorMode = "dark";
        btnChangeTheme.className = "btnChangeTheme btn btn-outline-light btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
        btnChangeThemeI.className = "fas fa-moon";
    } else {
        html.dataset.colorMode = "light";
        btnChangeTheme.className = "btnChangeTheme btn btn-outline-dark btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
        btnChangeThemeI.className = "far fa-moon";
    }
})

if (hours > 4 && hours < 16) {
    html.dataset.colorMode = "light";
    btnChangeTheme.className = "btnChangeTheme btn btn-outline-dark btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
    btnChangeThemeI.className = "far fa-moon";
} else {
    html.dataset.colorMode = "dark";
    btnChangeTheme.className = "btnChangeTheme btn btn-outline-light btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
    btnChangeThemeI.className = "fas fa-moon";
}

// Nav menu
function openNavMenu(x) {
    x.classList.toggle("change");
}

// Ganti style hamburger menu saat link navbar diklik
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        openNavMenu(navMenu);
    });
});
