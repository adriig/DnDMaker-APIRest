"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const usersSchema = new mongoose_1.Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Nombre: {
        type: String
    },
    _Contraseña: {
        type: String
    },
    _Tipo: {
        type: String
    }
});
// La colección de la BD (Plural siempre)
exports.UsersDB = (0, mongoose_1.model)('webUsers', usersSchema);
