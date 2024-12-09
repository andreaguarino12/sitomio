// Funzione per aprire/chiudere il menu laterale
function toggleMenu() {
    var menu = document.getElementById('sideMenu');
    var body = document.body;
    
    // Aggiungi o rimuovi la classe 'open' dal menu
    menu.classList.toggle('open');
    
    // Aggiungi o rimuovi la classe 'menu-open' dal corpo per spostare il contenuto
    body.classList.toggle('menu-open');
}
