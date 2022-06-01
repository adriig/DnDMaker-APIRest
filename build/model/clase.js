"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const classSchema = new mongoose_1.Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Nombre: {
        type: String
    },
    _Habilidades: {
        type: Array
    },
    _Descripcion: {
        type: String
    },
    _PG: {
        type: Array
    },
    _Salvacion: {
        type: Array
    },
    _IdOwner: {
        type: String
    },
    _Public: {
        type: Boolean
    },
    _Type: {
        type: String
    }
});
// La colección de la BD (Plural siempre)
exports.ClassDB = (0, mongoose_1.model)('classes', classSchema);
