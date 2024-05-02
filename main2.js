let griglia = document.getElementById("grid");
let bombe = generaBombe();

function creaQuadrato(numero) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = numero;

    square.addEventListener("click", function () {
        // Verifica se il numero della casella cliccata è una bomba
        if (bombe.includes(numero)) {
            // Se è una bomba, applica la classe "bomba"
            this.classList.add("bomba");
        } else {
            // Altrimenti, verifica se la casella è già stata cliccata
            if (!this.classList.contains("evidenziata")) {
                // Se non è stata cliccata, applica la classe "evidenziata" per evidenziarla
                this.classList.add("evidenziata");
            } else {
                // Se è già stata cliccata, rimuovi la classe "evidenziata" per disattivarne l'evidenziazione
                this.classList.remove("evidenziata");
            }
        }
    });

    return square;
}

function generaBombe() {
    let bombe = [];
    let numeroCasuale;

    while (bombe.length < 16) {
        numeroCasuale = Math.floor(Math.random() * 100) + 1;
        
        // Verifica se il numero casuale è già presente nell'array delle bombe
        if (!bombe.includes(numeroCasuale)) {
            bombe.push(numeroCasuale);
        }
    }

    return bombe;
}

// Ciclo per creare la griglia di quadrati
for (let i = 1; i <= 100; i++) {
    let elemento = creaQuadrato(i);
    griglia.append(elemento);
}