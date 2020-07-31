import API from './api.js';

const nuevoJuego = document.querySelector('.nuevoJuego');
const inputCharacter = document.querySelector('.container__input');

let idWord;

function juegoNuevo() {
    const {nuevaPalabra} = API;
    nuevaPalabra()
    .then ((response) => {
        nuevoJuego.style.visibility = 'hidden';
        idWord = response.id;
    })
    .catch ((error) => console.log(error));
};

function sendCharacter() {
    const characters = [];
    const {sendCharacter} = API;
    
    characters.push(inputCharacter.value);

    sendCharacter(characters, idWord)
        .then ((response) => console.log(response))
        .catch ((error) => console.log(error));
}

nuevoJuego.addEventListener ("click", juegoNuevo);
inputCharacter.addEventListener ("click", sendCharacter);