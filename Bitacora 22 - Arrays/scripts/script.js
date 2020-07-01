/**
 * Esta funcion solicita al usuario un número y lo retorna, nulo de lo contrario.
 * 
 * @param {String} mensaje que se mostrará en el prompt
 */
function solicitarNumero(mensaje) {
    let numero = prompt(mensaje);

    if (numero == null) {
        alert("Se ha cancelado el proceso");
        return null;
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

function dividirArrays() {
    const listaPares = [];
    const listaImpares = [];
    const listaNoNumericos = [];

    let texto = "1";

    while (texto != 0) {
        texto = solicitarNumero("Ingrese un número, para salir escriba '0'");
        texto = validacionNumero(texto);

        /*console.log(texto);
        console.log(typeof (texto));*/

        /*if (texto == "" || texto == " " && texto != 0) {
            texto = "1";
            continue;
        }*/

        if (texto == 0) {
            break;
        }

        if ("number" == typeof (texto)) {
            if (texto % 2 == 0 && texto != 0) {
                listaPares.push(texto);
            } else {
                listaImpares.push(texto);
            }
        } else {
            listaNoNumericos.push(texto);
        }
    }

    imprimir("listaPares", listaPares);
    imprimir("listaImpares", listaImpares);
    imprimir("listaNoNumericos", listaNoNumericos);
}

function eliminarExtremos() {
    const listaNumeros = [];
    let numero = 1;

    while (numero != 0) {
        numero = solicitarNumero("Ingrese un número, para salir escriba '0'");
        numero = validacionNumero(numero);

        if (numero == 0) {
            break;
        }

        if ("number" == typeof(numero)) {
            listaNumeros.push(numero);
            listaNumeros.sort(function(a, b){
                return a - b;
            });
            console.log(listaNumeros);
        } else {
            alert(numero + " no es un número.")
        }
    }

    listaNumeros.shift();
    listaNumeros.pop();
    imprimir("lista3", listaNumeros);
}

function dividirArrays2() {
    const lista = [];
    const lista1 = [];
    const lista2 = [];
    const lista3 = [];

    let texto = "";

    while (texto !== 0) {
        texto = solicitarNumero("Ingrese cualquier CharacterData, para salir ingrese el número '0'");
        texto = validacionNumero(texto);

        if (texto !== 0) {
            lista.push(texto);
        }
    }

    lista.forEach((item, index) => {
        if (index % 3 == 0) {
            lista1.push(item);
        } else if (index % 2 == 0) {
            lista2.push(item);
        } else {
            lista3.push(item);
        }
    });

    imprimir("listaIgual1", lista1);    
    imprimir("listaIgual2", lista2);    
    imprimir("listaIgual3", lista3);    
}