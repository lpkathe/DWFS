function sumemos () {
    var suma = 0;
    var contador = 1;

    while (contador <=5) {
        let numero = prompt("Ingrese un número "+contador+" de 5")
        
        if (!isNaN(numero) && numero != "") {
            suma += parseInt(numero);
            contador++;
        }
    };

    alert ("La suma de los números es: "+suma);
};

function promedio () {

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