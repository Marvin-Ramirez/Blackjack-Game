
//Botones de juego
const btnPedirCarta = document.getElementById("pedirCarta");
const btnNuevoJuego = document.getElementById("nuevoJuego");
const btnDetener = document.getElementById("detener");

//Pedir Carta y mostrarla (Jugador)
const divBarajaJugador = document.querySelector(".barajaJugador");
btnPedirCarta.addEventListener('click', mostrarCartaJugador);

function mostrarCartaJugador(){
    direccionCartas();
    const elemento = document.createElement('img');
    elemento.setAttribute("src", direccionCarta);
    divBarajaJugador.append(elemento);
    puntajeJugador();
}

//Direccion de la carta
const tipoCarta = ["C", "D", "H", "S"]
let numeroTipoCarta;
let numeroCarta;
let direccionCarta;

function direccionCartas(){
    numeroTipoCarta = Math.floor(Math.random()*4);
    while(true){
        numeroCarta = Math.floor(Math.random()*13);
        if (numeroCarta !== 0){
            break;
        }
    }
    
    if (numeroCarta === 1){
        direccionCarta = "img/" + "A" + tipoCarta[numeroTipoCarta] +".png";
    } else if (numeroCarta === 11){
        direccionCarta = "img/" + "J" + tipoCarta[numeroTipoCarta] +".png";
    } else if (numeroCarta === 12){
        direccionCarta = "img/" + "Q" + tipoCarta[numeroTipoCarta] +".png";
    } else if (numeroCarta === 13){
        direccionCarta = "img/" + "K" + tipoCarta[numeroTipoCarta] +".png";
    } else {
        direccionCarta = "img/" + numeroCarta + tipoCarta[numeroTipoCarta] +".png";
    }
}

//Puntaje jugador
let puntaje = 0;
const seccionJugador = document.getElementById("jugador");
const textoJugador = seccionJugador.firstElementChild;
function puntajeJugador(){
    if (numeroCarta === 11 || numeroCarta === 12 || numeroCarta === 13){
        puntaje += 10;
    } else if (numeroCarta === 1){
        puntaje += 11;
    } else {
        puntaje += numeroCarta;
    } 

    textoJugador.textContent = `Jugador - ${puntaje}`;

    if(puntaje === 21){
        puntajeComputadora();
        btnDetener.classList.add('bloqueoBoton');
        btnPedirCarta.classList.add('bloqueoBoton');
    } else if (puntaje > 21){
        alert("Perdiste");
        puntajeComputadora();
        btnDetener.classList.add('bloqueoBoton');
        btnPedirCarta.classList.add('bloqueoBoton');
    }
}

//Mostrar carta computadora
const divBarajaComputadora = document.querySelector(".barajaComputadora");
function mostrarCartaComputadora(){
    direccionCartas();
    const elemento = document.createElement('img');
    elemento.setAttribute("src", direccionCarta);
    divBarajaComputadora.append(elemento);
}

//Puntaje computadora
const seccionComputadora = document.getElementById("computadora");
const textoComputadora = seccionComputadora.firstElementChild;

function puntajeComputadora(){
    let puntajeC = 0;
    while(true){
        if(puntaje > 21){
            mostrarCartaComputadora();
            textoComputadora.textContent = `Computadora - ${numeroCarta}`;
            break;
        }

        if (puntaje === 21){
            mostrarCartaComputadora();

            if (numeroCarta === 11 || numeroCarta === 12 || numeroCarta === 13){
                    puntajeC += 10;
                } else if (numeroCarta === 1){
                    puntajeC += 11;
                } else {
                    puntajeC += numeroCarta;
                }

            textoComputadora.textContent = `Computadora - ${puntajeC}`;

            if (puntajeC === 21){
                alert("Nadie gana");
                break;
            }

            if (puntajeC > 21){
                alert("GANASTE");
                break;
            }
        }

        if (puntaje < 21){
            while(puntajeC < puntaje){
                mostrarCartaComputadora();
                if (numeroCarta === 11 || numeroCarta === 12 || numeroCarta === 13){
                        puntajeC += 10;
                    } else if (numeroCarta === 1){
                        puntajeC += 11;
                    } else {
                        puntajeC += numeroCarta;
                    }
                }
            textoComputadora.textContent = `Computadora - ${puntajeC}`;

            if (puntajeC === puntaje){
                alert('Nadie gana');
                break;
            }

            if (puntajeC > puntaje && puntajeC <= 21){
                alert('Perdiste');
                break;
            } else {
                alert('Ganaste');
                break;
            }
        }
    }
}

//Detener
btnDetener.addEventListener('click', detenerJuego);
function detenerJuego () {
    btnDetener.classList.add('bloqueoBoton');
    btnPedirCarta.classList.add('bloqueoBoton');

    puntajeComputadora();
}

//Nuevo Juego
btnNuevoJuego.addEventListener('click', function(){
    location.reload();
});
