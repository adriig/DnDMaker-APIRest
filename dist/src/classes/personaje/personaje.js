"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(id, NombrePersonaje, Alineacion, Personalidad, Raza, Clase, Hechizos, Estadisticas, Habilidades) {
        this._id = id;
        this._NombrePersonaje = NombrePersonaje;
        this._Alineacion = Alineacion;
        this._Personalidad = Personalidad;
        this._Raza = Raza;
        this._Clase = Clase;
        this._Hechizos = Hechizos;
        this._Estadisticas = Estadisticas;
        this._Habilidades = Habilidades;
    }
}
exports.Personaje = Personaje;
