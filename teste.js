document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    const navLinks = document.querySelectorAll("nav ul li a");

    const pages = {
        "1": "<h2>A Criação da Fórmula 1</h2><p>A Fórmula 1 foi oficialmente criada em 1950...</p>",
        "2": "<h2>Os Primeiros Carros</h2><p>Os primeiros carros da Fórmula 1 eram versões modificadas...</p>",
        "3": "<h2>As Pistas Iniciais</h2><p>Os primeiros circuitos da F1 eram extremamente desafiadores...</p>",
        "4": "<h2>Os Anos 70</h2><p>Os anos 70 foram uma época de intensa transformação...</p>",
        "5": "<h2>Os Anos 80</h2><p>Os anos 80 foram marcados por avanços tecnológicos e o surgimento de Senna...</p>",
        "6": "<h2>Os Anos 90</h2><p>Foi uma década de grandes mudanças e amadurecimento na Fórmula 1...</p>",
        "7": "<h2>Os Anos 2000</h2><p>Foi a década do domínio de Michael Schumacher e da Ferrari...</p>",
        "8": "<h2>Fórmula 1 Hoje</h2><p>Atualmente, a Fórmula 1 é um dos esportes mais tecnológicos do mundo...</p>"
    };

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            content.innerHTML = pages[page] || "<p>Conteúdo não encontrado.</p>";
        });
    });
});
