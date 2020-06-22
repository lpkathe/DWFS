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

    while (!parar) {
        let numero = prompt(mensaje + mensajeError);

        if (numero == null) {
            alert("Se ha cancelado el proceso");
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
        alert("La suma de los números es: " + suma);
    }
};

function promedio() {

    if (suma === 0) {
        alert("Se debe iniciar el proceso de suma ");
        sumar();
    }

    let promedio = suma / numerosIngresados;
    alert("El promedio es: " + promedio);

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
        alert("La cantidad de personas adultas son: " + adultos);
    }
};

function promedioCondicional() {

    let parar = false;
    let mensajeError = "";
    let numerosUnDigito = [];

    while (parar == false) {
        let numero = prompt("Ingrese un número \n Para terminar escriba 'salir'." + mensajeError);

        if (numero == null) {
            alert("Se ha cancelado el proceso");
            break;
        }

        numero = numero.trim();

        if (!isNaN(numero) && numero != "") {
            if (numero.length === 1) {
                numerosUnDigito.push(numero);
            }
        } else {
            mensajeError = "\n'" + numero + "' no es un número";
        }

        if (numero.trim().toLowerCase() == "salir") {
            parar = true;
            let suma = 0;
            numerosUnDigito.forEach(element => suma += parseInt(element));
            let promedio = suma / numerosUnDigito.length;

            alert("El promedio de los números de 1 dígito que se ingresaron es: " + promedio);
        }
    }
}

function paresImpares() {

    let par = 0;
    let impar = 0;
    let numero = 1;

    while (numero != 0) {
        numero = solicitarNumero("Ingrese un número");

        if (numero == null || numero == 0) {
            break;
        }

        if (0 == numero % 2) {
            par++;
        } else {
            impar++;
        }
    }

    if (par == impar) {
        alert("Se ingreso igual número de pares e impares");
    } else {
        if (par < impar) {
            alert("El mayor ingreso fue de números impares, equivalente a " + impar);
        } else {
            alert("El mayor ingreso fue de números pares, equivalente a " + par);
        }
    }
}

function numerosLetras() {

    let numero = solicitarNumero("Ingrese un número del 1 al 10 para conocer su equivalente en letras");
    let letra = "";

    switch (numero) {
        case 1:
            letra = "'a'";
            break;
        case 2:
            letra = "'b'";
            break;
        case 3:
            letra = "'c'";
            break;
        case 4:
            letra = "'d'";
            break;
        case 5:
            letra = "'e'";
            break;
        case 6:
            letra = "'f'";
            break;
        case 7:
            letra = "'g'";
            break;
        case 8:
            letra = "'h'";
            break;
        case 9:
            letra = "'i'";
            break;
        case 10:
            letra = "'j'";
            break;
        default:
            letra = ""
    }

    if (numero !== null) {
        if (letra != "") {
            alert(numero + " es equivalente a la letra " + letra);
        } else {
            alert("El número supera el rango permitido")
        }
    }
}