

let griglia = document.getElementById("grid");
let bombe = generaBombe();


function creaQuadrato(numero) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = numero;

    square.addEventListener("click", function () {
        if (bombe.includes(numero)) {
            this.classList.add("bomba");
        } else {
            if (!this.classList.contains("evidenziata")) {
                this.classList.add("evidenziata");
            } else {
                this.classList.remove("evidenziata")
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

        if (!bombe.includes(numeroCasuale)) {
            bombe.push(numeroCasuale);
        }
    }

    return bombe;
}

for (let i = 1; i <= 100; i++) {
    let elemento = creaQuadrato(i);
    griglia.append(elemento); 
}


