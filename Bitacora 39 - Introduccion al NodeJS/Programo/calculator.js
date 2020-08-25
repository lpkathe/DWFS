const fs = require('fs');
function sumar(a,b){
    let suma = a+b;
    fs.writeFileSync("log.txt", `${a} + ${b} = ${suma} "\n"`, {flag: "a+"}); 
    return suma
}
function restar(a,b){
    let resta = a-b;
    fs.writeFileSync("log.txt", `${a} - ${b} = ${resta} "\n"`, {flag: "a+"});
    return resta
}
function multiplicar(a,b){
    let multiplicacion = a*b;
    fs.writeFileSync("log.txt", `${a} x ${b} = ${multiplicacion} "\n"`, {flag: "a+"});
    return multiplicacion
}
function dividir(a,b){
    let division = a/b;
    fs.writeFileSync("log.txt", `${a} / ${b} = ${division} "\n"`, {flag: "a+"});
    return division
}
module.exports = {
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar,
    dividir: dividir
}