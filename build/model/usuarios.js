"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const usersSchema = new mongoose_1.Schema({
    _id: {
        type: String // para acceder en la subclase
    },
    _Nombre: {
        type: String
    },
    _ClasesSelected: {
        type: Array
    },
    _RacesSelected: {
        type: Array
    }
});
// La colección de la BD (Plural siempre)
exports.UsersDB = (0, mongoose_1.model)('webUsers', usersSchema);
