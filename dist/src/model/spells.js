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
    _CategoriaProducto: {
        type: String
    },
    _PrecioBase: {
        type: Number
    },
    _NotaMedia: {
        type: Number
    },
    _Almacenamiento: {
        type: Array
    },
    _Talla: {
        type: Number
    },
    _GBRam: {
        type: Number
    },
    _Megapixeles: {
        type: Number
    },
    _GHz: {
        type: Number
    },
});
// La colección de la BD (Plural siempre)
exports.SpellDB = (0, mongoose_1.model)('productos3', spellSchema);
