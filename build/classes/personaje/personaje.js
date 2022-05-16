"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(id, NombrePersonaje, Alineacion, Lore, Personalidad, IdOwner, Raza, Clase, Hechizos, Estadisticas, Habilidades) {
        this._id = id;
        this._NombrePersonaje = NombrePersonaje;
        this._Alineacion = Alineacion;
        this._Lore = Lore;
        this._Personalidad = Personalidad;
        this._IdOwner = IdOwner;
        this._Raza = Raza;
        this._Clase = Clase;
        this._Hechizos = Hechizos;
        this._Estadisticas = Estadisticas;
        this._Habilidades = Habilidades;
    }
}
exports.Personaje = Personaje;
