/**
 * Esta funcion solicita al usuario un número y lo retorna, nulo de lo contrario.
 * 
 * @param {String} mensaje que se mostrará en el prompt
 */
function solicitarNumero(mensaje) {
    let numero = prompt(mensaje);

    if (numero == null) {
        alert("Se ha cancelado el proceso");
    }

    return numero.trim();
}

function validacionNumero(texto) {

    if (!isNaN(texto) && texto != "") {
        return parseInt(texto);
    } else {
        return texto;
    }
}

function imprimir(id, array) {
    const getId = document.getElementById(id); /*Reconoce el elemento html utilizado*/
    array.forEach(element => {
        const li = document.createElement("li"); /*Crea otro elemento dentro del elemento contenedor*/
        const textoLi = document.createTextNode(element); /*Imprime algo dentro del elemento 'li' "*/
        getId.appendChild(li);
        li.appendChild(textoLi);
    });
}

function stop() {
    const listaStop = [];
    let numero = 0;
    
    while (numero != "stop") {
        numero = solicitarNumero("Ingrese un número; para deterlo escriba 'stop'.");
        numero = validacionNumero(numero);

        if ("number" == typeof (numero)) {
            listaStop.push(numero);
        } else if (numero.toLowerCase() == "stop") {
            break;
        } else {
            alert(numero + " no es un caracter valido.");
        }
    }
    imprimir("lista1", listaStop);
}