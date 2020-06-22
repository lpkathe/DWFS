let mayor_menor = numero => numero == 0 ? "Es igual a '0'" : numero < 0 ? "Es menor que '0'" : "Es mayor que '0'";

function calcular() {
    let number = document.getElementById("number").value;
    document.getElementById("resultado").innerHTML = mayor_menor(number);
}