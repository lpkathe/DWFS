class Aviones {
    constructor(nombre, tipo, tripulacion, capacidad_pasajeros, velocidad_max_nudos, capacidad_combustible_galones, tiempo_vuelo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.tripulacion = tripulacion;
        this.capacidad_pasajeros = capacidad_pasajeros;
        this.velocidad_max_nudos = velocidad_max_nudos;
        this.capacidad_combustible_galones = capacidad_combustible_galones;
        this.tiempo_vuelo = tiempo_vuelo;

    }
    saludo() {
        console.log(`Bienvenidos al avión ${this.nombre}, somos un avión de tipo ${this.tipo}, tenemos una tripulación conformada por ${this.tripulacion}, la capacidad de pasajeros es de ${this.capacidad_pasajeros} y nuestra velocidad máxima es de ${this.velocidad_max_nudos} nudos.`);
    }
    vuelo() {
        console.log(`Para un vuelo de ${this.tiempo_vuelo} se hace necesario tener los tanques llenos, lo cual equivale a ${this.capacidad_combustible_galones} galones`);
    }
}

const Boeing737 = new Aviones ("Boeing 737", "Comercial", "Piloto, copiloto y 4 auxiliares de vuelo", 104, 473, 5142, 2580, "4 horas");

Boeing737.saludo();
Boeing737.vuelo();