const average = numeros => {

    let suma = 0;

    numeros.forEach(element => {
        if (!isNaN(element)) {
            suma += element;
        }
    });

    if (numeros.length == 0) {
        throw "'0' no puede ser divisor";
    } else {
        return suma / numeros.length;
    }
}

console.log(average([]));