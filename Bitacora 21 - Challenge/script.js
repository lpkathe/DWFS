var suma = 0;
var contador = 1;

while (contador <=5) {
    var numero = prompt("Ingrese un número "+contador+" de 5")
    
    if (!isNaN(numero) && numero != "") {
        suma += parseInt(numero);
        contador++;
    }
}

alert ("La suma de los números es: "+suma);


