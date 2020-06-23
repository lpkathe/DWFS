const average = numeros => {

    let suma = 0;

    numeros.forEach(element => {
        if (!isNaN(element)) {
            suma += element;
        }
    });

    if (numeros.length == 0) {
        alert("'0' no puede ser divisor");
    } else {
        return suma / numeros.length;
    }
}

console.log(average([1,2,3,4,5,"p","r","a",9]));