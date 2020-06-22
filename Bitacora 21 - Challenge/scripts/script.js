let suma = 0;
let mensajeError = "";
const numerosIngresados = 5;

function sumar() {
    let contador = 1;

    while (contador <= numerosIngresados) {
        let numero = prompt("Ingrese un número " + contador + " de " + numerosIngresados + mensajeError)
        
        if (numero == null) {
            alert ("Se ha cancelado el proceso, el resultado ha sido " + suma);
            break;
        } 

        if (!isNaN(numero) && numero != "" && (numero !== " ")) {
            suma += parseInt(numero);
            mensajeError = "";
            contador++;
        } else {
            mensajeError = "\n" + numero + " no es un número.";
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
        edad = prompt("Ingrese la edad" + mensajeError)

        if (edad == null) {
            alert ("Se ha cancelado el proceso, el número de personas adultas es " + adultos);
            break;
        } 

        if (!isNaN(edad) && edad != "" && (edad !== " ")) {
            if (edad >= 18) {
                adultos++;
            }
            mensajeError = "";
        } else {
            mensajeError = "\n" + edad + " no es un número.";
        }
    };

    if (edad == 0) {
        alert ("La cantidad de personas adultas son: " + adultos);
    }
};