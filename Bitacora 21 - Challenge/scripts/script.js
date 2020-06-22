let suma = 0;
const numerosIngresados = 5;

/**
 * Esta funcion solicita al usuario un número y lo retorna, nulo de lo contrario.
 * 
 * @param {String} mensaje que se mostrará en el prompt
 */
function solicitarNumero(mensaje) {
    let mensajeError = "";
    let parar = false;

    while(!parar) {
        let numero = prompt(mensaje + mensajeError);

        if (numero == null) {
            alert ("Se ha cancelado el proceso");
            break;
        }
        
        numero = numero.trim();

        if (!isNaN(numero) && numero != "") {
            parar = true;
            return parseInt(numero);
        } else {
            mensajeError = "\n'" + numero + "' no es un número";
        }
    }
    return null;
}

function sumar() {
    let contador = 1;

    while (contador <= numerosIngresados) {
        let numero = solicitarNumero("Ingrese un número " + contador + " de " + numerosIngresados)

        if (numero == null) {
            break;
        } else {
            suma += parseInt(numero);
            contador++;
        }
    }

    if (contador >= numerosIngresados) {
        alert ("La suma de los números es: " + suma);
    }
};

function promedio() {

    if (suma === 0) {
        alert ("Se debe iniciar el proceso de suma ");
        sumar();
    }

    let promedio = suma / numerosIngresados;
    alert ("El promedio es: " + promedio);

};

function edades() {

    let adultos = 0;
    let edad;

    while (edad != 0) {
        edad = solicitarNumero("Ingrese la edad")

        if (edad == null) {
            break;
        } else {
            if (edad >= 18) {
                adultos++;
            }
        }
    };

    if (edad == 0) {
        alert ("La cantidad de personas adultas son: " + adultos);
    }
};

function promedioCondicional() {
}