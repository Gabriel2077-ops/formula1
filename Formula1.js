document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const pageId = link.getAttribute("data-page");

            pages.forEach(page => page.classList.remove("active"));
            document.getElementById(`page${pageId}`).classList.add("active");
        });
    });
});
document.getElementById("entrar").addEventListener("click", function() {
    // Redireciona para a página principal do site
    window.location.href = "pagina-principal.html";
});
