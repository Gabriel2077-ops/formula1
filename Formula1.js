document.addEventListener('DOMContentLoaded', () => { 
    // Função para exibir a página correta
    function changePage(pageNumber) {
        // Esconde todas as páginas
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.style.display = 'none');
        
        // Mostra a página selecionada
        const selectedPage = document.getElementById('page' + pageNumber);
        if (selectedPage) {
            selectedPage.style.display = 'block';
        }

        console.log(selectedPage)
    }
    
    // Exibir a primeira página por padrão
    changePage(1);

});