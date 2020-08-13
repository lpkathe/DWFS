const fs = require('fs');

function sumar(a,b){
    let suma = a+b;
    //fs.writeFileSync("log.txt", a" + "b" = "suma/n, {flag: "a+"});
    /*fs.writeFileSync("log.txt", a, [{flag: "a+"}]);
    fs.writeFileSync("log.txt", " + ", {flag: "a+"});
    fs.writeFileSync("log.txt", b, {flag: "a+"});
    fs.writeFileSync("log.txt", " = ", {flag: "a+"});
    fs.writeFileSync("log.txt", suma/n, {flag: "a+"});*/
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