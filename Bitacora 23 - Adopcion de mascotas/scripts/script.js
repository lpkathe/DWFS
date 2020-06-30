const en_adopcion = 1;
const en_proceso = 2;
const adoptado = 3;

class Perro {
    constructor(nombre, raza, edad, color, discapacidad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.color = color;
        this.discapacidad = discapacidad;
        this.estado_adopcion = en_adopcion;
    }

    getEstadoAdopcion() {
        return this.estado_adopcion;
    }

    infoEstadoAdopcion() {
        switch (this.estado_adopcion) {
            case en_adopcion:
                return "Disponible para adoptar";
            case en_proceso:
                return "En proceso de adopción";
            case adoptado:
                return "Adoptado";
            default: console.log("Estado de adopción no permitido.");
                break;
        }
    }

    estadoAdopcion(estado) {
        switch (estado) {
            case en_adopcion:
            case en_proceso:
            case adoptado:
                this.estado_adopcion = estado;
                break;
            default: console.log("Estado de adopción no permitido.");
        }
    }
}

const perro1 = new Perro("Beto", "salchicha", 3, "cafe", "ninguna");
perro1.estadoAdopcion(adoptado);
console.log(perro1.infoEstadoAdopcion());

const perro2 = new Perro("Dana", "pequinez", 1, "blanco", "ninguna");
perro2.estadoAdopcion(en_proceso);
console.log(perro2.infoEstadoAdopcion());

const perro3 = new Perro(
    prompt("Ingrese el nombre del perro"),
    prompt("Ingrese la raza del perro"),
    prompt("Ingrese la edad del perro"),
    prompt("Ingrese el color del perro"),
    prompt("Ingrese la discapacidad del perro (De lo contrario escriba ninguna)"),
);

const listaPerros = [perro1, perro2, perro3];

function imprimir(id, texto, index) {
    const getId = document.getElementById(id); /*Reconoce el elemento html utilizado*/
    const li = document.createElement("li"); /*Crea otro elemento dentro del elemento contenedor*/
    const textoLi = document.createTextNode((index + 1) + ". " + texto); /*Imprime algo dentro del elemento 'li' "*/
    getId.appendChild(li);
    li.appendChild(textoLi);
}

function listaTodosLosPerros() {
    listaPerros.forEach(function (element, index) {
        imprimir("listado1", element.nombre, index);
    })
}

function listaPerrosEnAdopcion() {
    listaPerros
        .filter(element => element.getEstadoAdopcion() == en_adopcion)
        .forEach((element, index) => imprimir("listado2", element.nombre, index));
}

function listaPerrosEnProceso() {
    listaPerros
        .filter(element => element.getEstadoAdopcion() == en_proceso)
        .forEach((element, index) => imprimir("listado3", element.nombre, index));
}

function listaPerrosAdoptados() {
    listaPerros
        .filter(element => element.getEstadoAdopcion() == adoptado)
        .forEach((element, index) => imprimir("listado4", element.nombre, index));
}