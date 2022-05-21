"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazaDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const razasSchema = new mongoose_1.Schema({
    _id: {
        type: Number
    },
    _NombreRaza: {
        type: String // para acceder en la subclase
    },
    _Multiplicadores: {
        type: Array
    },
    _Habilidades: {
        type: Array
    },
    _Origen: {
        type: String
    },
    _Nombres: {
        type: Array
    },
    _RazaDependiente: {
        type: String
    },
    _OrigenSubRaza: {
        type: String
    },
    _IdOwner: {
        type: String
    }
});
// La colección de la BD (Plural siempre)
exports.RazaDB = (0, mongoose_1.model)('Razas', razasSchema);
