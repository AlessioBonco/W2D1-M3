
function toggleMenu() {
    let menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}

    // Array di tutti i div di contenuto
    let divs = document.querySelectorAll(".contentDiv");
    let currentIndex = 0; // Indice del div attualmente visibile

    // Funzione per mostrare il div precedente
    function mostraPrima() {
        // Nasconde il div attuale
        divs[currentIndex].classList.remove("active");
        // Aggiorna l'indice al div precedente (con loop)
        currentIndex = (currentIndex - 1 + divs.length) % divs.length;
        // Mostra il nuovo div
        divs[currentIndex].classList.add("active");
    }

    // Funzione per mostrare il div successivo
    function mostraDopo() {
        // Nasconde il div attuale
        divs[currentIndex].classList.remove("active");
        // Aggiorna l'indice al div successivo (con loop)
        currentIndex = (currentIndex + 1) % divs.length;
        // Mostra il nuovo div
        divs[currentIndex].classList.add("active");
    }
    setInterval(mostraDopo, 4000); 

    function MostraNascondi() {
        let div = document.getElementById("migliori-artisti");
        if (div.style.display === "none") {
            div.style.display = "block"; 
        } else {
            div.style.display = "none";
        }
    }

    function MostraNascondi2() {
        let div = document.getElementById("miglioriAlbum");
        if (div.style.display === "none") {
            div.style.display = "block"; 
        } else {
            div.style.display = "none";
        }
    }

    function MostraNascondi3() {
        let div = document.getElementById("preferiti");
        if (div.style.display === "none") {
            div.style.display = "block"; 
        } else {
            div.style.display = "none";
        }
    }

   