"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsDB = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const postsSchema = new mongoose_1.Schema({
    _id: {
        type: String
    },
    _Titulo: {
        type: String
    },
    _Texto: {
        type: String
    },
    _Likes: {
        type: Array
    },
    _Dislikes: {
        type: Array
    },
    _Date: {
        type: Date
    },
    _Tipo: {
        type: String
    },
    _IdOwner: {
        type: String
    },
    _Comentarios: {
        type: Array
    }
});
// La colección de la BD (Plural siempre)
exports.PostsDB = (0, mongoose_1.model)('posts', postsSchema);
