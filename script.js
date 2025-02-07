document.getElementById("themeButton").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelectorAll("section").forEach(section => section.classList.toggle("dark-mode"));
});
