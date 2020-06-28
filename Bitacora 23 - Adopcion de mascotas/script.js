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

/*const perro3 = new Perro(
    prompt("Ingrese el nombre del perro"),
    prompt("Ingrese la raza del perro"),
    prompt("Ingrese la edad del perro"),
    prompt("Ingrese el color del perro"),
    prompt("Ingrese la discapacidad del perro (De lo contrario escriba ninguna)"),
);
console.log(perro3);*/

const listaPerros = [perro1, perro2, perro3];