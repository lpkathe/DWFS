let suma = 0;
const numerosIngresados = 5;

function sumar() {
    let contador = 1;
    let mensajeError = "";

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

    var adultos = 0
    var edad = 1

    while (edad != 0) {
        edad = prompt("Ingrese su edad")

        if (edad >= 18) {
            adultos++;
        }
    };

    alert ("La cantidad de personas adultas son: "+adultos);
};