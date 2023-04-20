document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    body.addEventListener("click", function (event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});

