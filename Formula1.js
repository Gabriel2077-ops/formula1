document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado!");

    // Seleciona todos os links do menu
    const links = document.querySelectorAll("nav ul li a");

    // Adiciona evento de clique aos links
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede recarregamento da página

            const pageNumber = this.getAttribute("data-page"); // Obtém número da página
            console.log("Mudando para página:", pageNumber);

            changePage(pageNumber);
        });
    });

    // Exibe a primeira página ao carregar
    changePage(1);
});

// Função para trocar de página
function changePage(pageNumber) {
    console.log("Página ativa:", pageNumber);

    // Oculta todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Mostra apenas a página correta
    const selectedPage = document.getElementById('page' + pageNumber);
    if (selectedPage) {
        selectedPage.classList.add('active');
    } else {
        console.error("Página não encontrada:", pageNumber);
    }
}
