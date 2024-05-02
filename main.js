

let griglia = document.getElementById("grid");
let bombe = generaBombe();
let punteggio = 0


function creaQuadrato(numero) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = numero;

    square.addEventListener("click", function () {
        if (bombe.includes(numero)) {
            this.classList.add("bomba");
            alert("game over")
        } else {
            !this.classList.toggle("evidenziata") 
            aggiornaPunteggio (); 
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

function aggiornaPunteggio () {
    punteggio++;
    console.log("punteggio: " + punteggio);
}

for (let i = 1; i <= 100; i++) {
    let elemento = creaQuadrato(i);
    griglia.append(elemento); 
}


