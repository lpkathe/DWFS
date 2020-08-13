
function sumar(a,b){
    let suma = a+b;
    return suma
}
function restar(a,b){
    let resta = a-b;
    return resta
}
function multiplicar(a,b){
    let multiplicacion = a*b;
    return multiplicacion
}
function dividir(a,b){
    let division = a/b;
    return division
}

module.exports = {
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar,
    dividir: dividir
}