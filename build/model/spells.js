"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const spellSchema = new mongoose_1.Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Nombre: {
        type: String
    },
    _Tipo: {
        type: String
    },
    _Duracion: {
        type: Number
    },
    _Descripcion: {
        type: String
    },
});
// La colección de la BD (Plural siempre)
exports.SpellDB = (0, mongoose_1.model)('hechizos', spellSchema);
