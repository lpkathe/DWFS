const average = numeros => {
let suma = 0;

    numeros.forEach(element => {
        
        if (!isNaN(element)){
            suma += element;
        }
    });

    const promedio = suma / numeros.length;
    return promedio;
}
console.log(average([1,2,3,4,5,"q","w","e"]));