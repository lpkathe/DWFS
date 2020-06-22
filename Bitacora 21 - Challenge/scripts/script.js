function sumemos() {
    let suma = 0;
    let contador = 1;
    let mensajeError = "";
    const numeroVueltas = 5;

    while (contador <= numeroVueltas) {
        let numero = prompt("Ingrese un número " + contador + " de " + numeroVueltas + mensajeError)
        
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
    console.log(contador);

    if (contador >= numeroVueltas) {
        alert ("La suma de los números es: " + suma);
    }
};

function promedio() {

    var promedio = suma / 5;

    alert ("El promedio es: "+promedio);
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