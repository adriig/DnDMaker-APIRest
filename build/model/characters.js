"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const charactersSchema = new mongoose_1.Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _NombrePersonaje: {
        type: String
    },
    _Alineacion: {
        type: String
    },
    _Personalidad: {
        type: String
    },
    _Raza: {
        type: String
    },
    _Clase: {
        type: String
    },
    _Hechizos: {
        type: String
    },
    _Estadisticas: {
        type: String
    },
    _Habilidades: {
        type: Number
    },
});
// La colección de la BD (Plural siempre)
exports.CharacterDB = (0, mongoose_1.model)('characters', charactersSchema);
