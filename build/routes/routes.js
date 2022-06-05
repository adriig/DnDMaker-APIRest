"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const raza_1 = require("../model/raza");
const spells_1 = require("../model/spells");
const usuarios_1 = require("../model/usuarios");
const characters_1 = require("../model/characters");
const clase_1 = require("../model/clase");
const user_1 = require("../classes/users/user");
const posts_1 = require("../model/posts");
const comments_1 = require("../classes/posts/comments");
const posts_2 = require("../classes/posts/posts");
const gameRequest_1 = require("../model/gameRequest");
const game_1 = require("../model/game");
let dSchemaClass = {
    _id: null,
    _Nombre: null,
    _Habilidades: null,
    _Descripcion: null,
    _PG: null,
    _Salvacion: null,
    _IdOwner: null,
    _Public: null,
    _Type: null
};
let dSchemaCharacter = {
    _id: null,
    _NombrePersonaje: null,
    _Alineacion: null,
    _Lore: null,
    _Personalidad: null,
    _IdOwner: null,
    _Raza: null,
    _Clase: null,
    _Hechizos: null,
    _Estadisticas: null,
    _Habilidades: null,
};
let dSchemaRaza = {
    _id: null,
    _NombreRaza: null,
    _Multiplicadores: null,
    _Habilidades: null,
    _Origen: null,
    _Nombres: null,
    _IdOwner: null
};
let dSchemaSubRaza = {
    _id: null,
    _NombreRaza: null,
    _Multiplicadores: null,
    _Habilidades: null,
    _Origen: null,
    _Nombres: null,
    _RazaDependiente: null,
    _OrigenSubRaza: null,
    _IdOwner: null
};
let dSchemaUser = {
    _id: null,
    _Nombre: null,
    _ClasesSelected: null,
    _RacesSelected: null
};
let dSchemaSpells = {
    _id: null,
    _Nombre: null,
    _Tipo: null,
    _Duracion: null,
    _Descripcion: null,
};
let dSchemaPosts = {
    _id: null,
    _Titulo: null,
    _Texto: null,
    _Likes: null,
    _Dislikes: null,
    _Date: null,
    _Tipo: null,
    _IdOwner: null,
    _Comentarios: null
};
let dSchemaGame = {
    _id: null,
    owner: null,
    name: null,
    maxPlayers: null,
    createdAt: null,
    participants: []
};
let dSchemaGameRequest = {
    _id: null,
    requester: null,
    gameId: null,
    createdAt: null
};
class DatoRoutes {
    constructor() {
        /**
         *
         * Rutas para Aplicación CRUD de Productos.
         *
        */
        this.getRazas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield raza_1.RazaDB.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchRaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield raza_1.RazaDB.findOne({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteRaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield raza_1.RazaDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getmyRaces = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.idOwner;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield raza_1.RazaDB.find({ _IdOwner: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addRaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres, _IdOwner } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaRaza = {
                    _id: _id,
                    _NombreRaza: _NombreRaza,
                    _Multiplicadores: _Multiplicadores,
                    _Habilidades: _Habilidades,
                    _Origen: _Origen,
                    _Nombres: _Nombres,
                    _IdOwner: _IdOwner
                };
                console.log(req.body);
                const oSchema = new raza_1.RazaDB(dSchemaRaza);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addSubRaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres, _RazaDependiente, _OrigenSubRaza, _IdOwner } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaSubRaza = {
                    _id: _id,
                    _NombreRaza: _NombreRaza,
                    _Multiplicadores: _Multiplicadores,
                    _Habilidades: _Habilidades,
                    _Origen: _Origen,
                    _Nombres: _Nombres,
                    _RazaDependiente: _RazaDependiente,
                    _OrigenSubRaza: _OrigenSubRaza,
                    _IdOwner: _IdOwner
                };
                const oSchema = new raza_1.RazaDB(dSchemaSubRaza);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield usuarios_1.UsersDB.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield usuarios_1.UsersDB.findOne({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield usuarios_1.UsersDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _Nombre, _ClasesSelected, _RacesSelected } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaUser = {
                    _id: _id,
                    _Nombre: _Nombre,
                    _ClasesSelected: _ClasesSelected,
                    _RacesSelected: _RacesSelected
                };
                console.log(dSchemaUser);
                const oSchema = new usuarios_1.UsersDB(dSchemaUser);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addClassToUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idValue = req.params.valueId;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield usuarios_1.UsersDB.findOneAndUpdate({ _id: id }, { $push: { _ClassesSelected: idValue } });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.removeClassInUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idValue = req.params.valueId;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield usuarios_1.UsersDB.findOne({ _id: id });
                const newUser = new user_1.Users(query._id, query._ClassesSelected, query._RacesSelected);
                const feedback = newUser.deleteMyClass(idValue);
                console.log(feedback);
                const query2 = yield usuarios_1.UsersDB.findOneAndUpdate({ _id: id }, { _ClassesSelected: feedback });
                res.json(query2);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.existClassInUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idValue = req.params.valueId;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield usuarios_1.UsersDB.findOne({ _id: id });
                const newUser = new user_1.Users(query._id, query._ClassesSelected, query._RacesSelected);
                let feedback = newUser.searchMyClass(idValue);
                res.send(feedback);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getClassesOfUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idValue = req.params.valueId;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield usuarios_1.UsersDB.findOne({ _id: id });
                res.send(query._ClassesSelected);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getSpells = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield spells_1.SpellDB.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchSpells = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield spells_1.SpellDB.findOne({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteSpells = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield spells_1.SpellDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addSpells = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id, Nombre, Tipo, Duracion, Descripcion } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaSpells = {
                    _id: Id,
                    _Nombre: Nombre,
                    _Tipo: Tipo,
                    _Duracion: Duracion,
                    _Descripcion: Descripcion,
                };
                console.log(dSchemaSpells);
                const oSchema = new spells_1.SpellDB(dSchemaSpells);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getCharacters = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield characters_1.CharacterDB.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getmyCharacters = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.idOwner;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield characters_1.CharacterDB.find({ _IdOwner: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield characters_1.CharacterDB.findOne({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _Alineacion, _Clase, _Estadisticas, _Personalidad, _IdOwner, _Raza, _Lore, _NombrePersonaje, _Hechizos, _Habilidad } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaCharacter = {
                    _id: _id,
                    _NombrePersonaje: _NombrePersonaje,
                    _Alineacion: _Alineacion,
                    _Lore: _Lore,
                    _Personalidad: _Personalidad,
                    _IdOwner: _IdOwner,
                    _Raza: _Raza,
                    _Clase: _Clase,
                    _Hechizos: _Hechizos,
                    _Estadisticas: _Estadisticas,
                    _Habilidades: _Habilidad,
                };
                const oSchema = new characters_1.CharacterDB(dSchemaCharacter);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteCharacter = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield characters_1.CharacterDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getClass = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield clase_1.ClassDB.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addClass = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _Nombre, _Habilidades, _Descripcion, _PG, _Salvacion, _IdOwner, _Public, _Type } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaClass = {
                    _id: _id,
                    _Nombre: _Nombre,
                    _Habilidades: _Habilidades,
                    _Descripcion: _Descripcion,
                    _PG: _PG,
                    _Salvacion: _Salvacion,
                    _IdOwner: _IdOwner,
                    _Public: _Public,
                    _Type: _Type
                };
                console.log(dSchemaClass);
                const oSchema = new clase_1.ClassDB(dSchemaClass);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchClass = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield clase_1.ClassDB.findOne({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteClass = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield clase_1.ClassDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getmyClasses = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.idOwner;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield clase_1.ClassDB.find({ _IdOwner: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getpickeableClasses = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.idOwner;
            const value = req.params.array;
            const array = value.split(',');
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                // const query = await ClassDB.find({$and: [{_Public: true}, { _idOwner: array}]})
                console.log(array);
                const query = yield clase_1.ClassDB.find({ $and: [{ _Public: true }, { $or: [{ _id: { $in: array } }, { _idOwner: valor }] }] });
                console.log("Uwu");
                console.log(query);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield posts_1.PostsDB.aggregate([{ $project: { "_id": 1, "_Titulo": 1, "_Date": 1, "_Texto": 1, "_Likes": 1, "_Dislikes": 1, "_Tipo": 1, "_IdOwner": 1, "_Comentarios": 1, LikesNumber: { $size: "$_Likes" } } }, { $sort: { LikesNumber: -1 } }]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getmyPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.idOwner;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield posts_1.PostsDB.aggregate([{ $match: { _IdOwner: valor } }, { $project: { "_id": 1, "_Titulo": 1, "_Date": 1, "_Texto": 1, "_Likes": 1, "_Dislikes": 1, "_Tipo": 1, "_IdOwner": 1, "_Comentarios": 1, LikesNumber: { $size: "$_Likes" } } }, { $sort: { LikesNumber: -1 } }]);
                console.log(query);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.searchPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield posts_1.PostsDB.findOne({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getPostPerType = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.type;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield posts_1.PostsDB.find({ _Tipo: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _Titulo, _Texto, _Likes, _Dislikes, _Date, _Tipo, _IdOwner, _Comentarios } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaPosts = {
                    _id: _id,
                    _Titulo: _Titulo,
                    _Texto: _Texto,
                    _Likes: _Likes,
                    _Dislikes: _Dislikes,
                    _Date: _Date,
                    _Tipo: _Tipo,
                    _IdOwner: _IdOwner,
                    _Comentarios: _Comentarios
                };
                console.log(dSchemaCharacter);
                const oSchema = new posts_1.PostsDB(dSchemaPosts);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deletePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield posts_1.PostsDB.findOneAndDelete({ _id: valor });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { _id, _Date, _IdOwner, _Texto } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const comentario = new comments_1.Comments(_id, _IdOwner, _Date, _Texto);
                const query = yield posts_1.PostsDB.findOneAndUpdate({ _id: id }, { $push: { _Comentarios: comentario } });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.likePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idvalue = req.params.idvalue;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(id);
                const query = yield posts_1.PostsDB.findOneAndUpdate({ _id: id }, { $push: { _Likes: idvalue } });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.dislikePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idvalue = req.params.idvalue;
            console.log("DATOS: " + id + idvalue);
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield posts_1.PostsDB.findOneAndUpdate({ _id: id }, { $push: { _Dislikes: idvalue } });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.unDislikePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idvalue = req.params.idvalue;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield posts_1.PostsDB.findOne({ _id: id });
                const myPost = new posts_2.Posts(query._id, query._Titulo, query._Texto, query._Likes, query._Dislikes, query._Date, query._Tipo, query._IdOwner, query._Comentarios);
                const feedback = myPost.removeDislike(idvalue);
                const query2 = yield posts_1.PostsDB.findOneAndUpdate({ _id: id }, { _Dislikes: feedback });
                res.json(query2);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.unLikePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idvalue = req.params.idvalue;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield posts_1.PostsDB.findOne({ _id: id });
                const myPost = new posts_2.Posts(query._id, query._Titulo, query._Texto, query._Likes, query._Dislikes, query._Date, query._Tipo, query._IdOwner, query._Comentarios);
                const feedback = myPost.removeLike(idvalue);
                const query2 = yield posts_1.PostsDB.findOneAndUpdate({ _id: id }, { _Likes: feedback });
                res.json(query2);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.listGames = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.listGameFromFilter(req, res, {});
        });
        this.listGame = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.listGameFromFilter(req, res, {
                gameId: req.params.gameId
            });
        });
        this.listGamesFromOwner = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.listGameFromFilter(req, res, {
                owner: req.params.owner
            });
        });
        this.listGameFromFilter = (req, res, filter) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield game_1.GameDB.find(filter);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.createGame = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _owner, _name, _maxPlayers, _createdAt, _participants } = req.body;
            yield database_1.db.conectarBD().then(() => __awaiter(this, void 0, void 0, function* () {
                dSchemaGame = {
                    _id: _id,
                    owner: _owner,
                    name: _name,
                    maxPlayers: _maxPlayers,
                    createdAt: _createdAt,
                    participants: _participants
                };
                const schema = new game_1.GameDB(dSchemaGame);
                yield schema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteGame = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const gameId = req.params.gameId;
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield game_1.GameDB.findOneAndDelete({ _id: gameId });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.createGameRequest = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _requester, _gameId, _createdAt } = req.body;
            yield database_1.db.conectarBD().then(() => __awaiter(this, void 0, void 0, function* () {
                dSchemaGameRequest = {
                    _id: _id,
                    requester: _requester,
                    gameId: _gameId,
                    createdAt: _createdAt
                };
                const schema = new gameRequest_1.GameRequestDB(dSchemaGameRequest);
                yield schema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteGameRequest = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { gameId, ownerId } = req.params;
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield gameRequest_1.GameRequestDB.findOneAndDelete({
                    gameId: gameId,
                    requester: ownerId
                });
                res.json(query);
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getGameRequestsFromGameId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.getGameRequestFromFilter(req, res, {
                gameId: req.params.gameId
            });
        });
        this.getGameRequestsFromOwner = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.getGameRequestFromFilter(req, res, {
                requester: req.params.ownerId
            });
        });
        this.getGameRequestsFromOwnerInGame = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.getGameRequestFromFilter(req, res, {
                requester: req.params.ownerId,
                gameId: req.params.gameId
            });
        });
        this.getGameRequestFromFilter = (req, res, filter) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield gameRequest_1.GameRequestDB.find(filter);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/Razas/get', this.getRazas);
        this._router.post('/Razas/Sub/add', this.addSubRaza);
        this._router.post('/Razas/add', this.addRaza);
        this._router.get('/Razas/search/:id', this.searchRaza);
        this._router.delete('/Razas/delete/:id', this.deleteRaza);
        this._router.get('/Razas/getmy/:idOwner', this.getmyRaces);
        this._router.get('/Users/get', this.getUsers);
        this._router.post('/Users/add', this.addUser);
        this._router.delete('/Users/delete', this.deleteUser);
        this._router.get('/Users/search/:id', this.searchUser);
        this._router.get('/Users/getClasses/:id', this.getClassesOfUser);
        this._router.put('/Users/addClass/:id/:valueId', this.addClassToUser);
        this._router.get('/Users/existClassInUsers/:id/:valueId', this.existClassInUser);
        this._router.get('/Users/deleteClassInUser/:id/:valueId', this.removeClassInUser);
        this._router.get('/Spells/get', this.getSpells);
        this._router.post('/Spells/add', this.addSpells);
        this._router.delete('/Spells/delete', this.deleteSpells);
        this._router.get('/Spells/search/:id', this.searchSpells);
        this._router.get('/Characters/get', this.getCharacters);
        this._router.get('/Characters/getmy/:idOwner', this.getmyCharacters);
        this._router.get('/Characters/search/:id', this.searchCharacter);
        this._router.post('/Characters/add', this.addCharacter);
        this._router.delete('/Characters/delete/:id', this.deleteCharacter);
        this._router.get('/Classes/get', this.getClass);
        this._router.post('/Classes/add', this.addClass);
        this._router.post('/Classes/search/:id', this.searchClass);
        this._router.delete('/Classes/delete/:id', this.deleteClass);
        this._router.get('/Classes/getmy/:idOwner', this.getmyClasses);
        this._router.get('/Classes/getpickeable/:idOwner/:array', this.getpickeableClasses);
        this._router.get('/Posts/get', this.getPosts);
        this._router.get('/Posts/getmy/:idOwner', this.getmyPosts);
        this._router.get('/Posts/search/:id', this.searchPost);
        this._router.delete('/Posts/delete/:id', this.deletePost);
        this._router.post('/Posts/add', this.addPost);
        this._router.get('/Posts/getpertype/:type', this.getPostPerType);
        this._router.put('/Posts/addComment/:id', this.addComment);
        this._router.get('/Posts/like/:id/:idvalue', this.likePost);
        this._router.get('/Posts/dislike/:id/:idvalue', this.dislikePost);
        this._router.get('/Posts/unlike/:id/:idvalue', this.unLikePost);
        this._router.get('/Posts/undislike/:id/:idvalue', this.unDislikePost);
        this._router.get('/games/get', this.listGames);
        this._router.get('/games/get/:gameId', this.listGame);
        this._router.get('/games/from/:owner', this.listGamesFromOwner);
        this._router.post('/games/create', this.createGame);
        this._router.delete('/games/delete/:gameId', this.deleteGame);
        this._router.get('/games/request/from/:ownerId', this.getGameRequestsFromOwner);
        this._router.get('/games/request/from/:ownerId/:gameId', this.getGameRequestsFromOwnerInGame);
        this._router.get('/games/request/get/:gameId', this.getGameRequestsFromGameId);
        this._router.post('/games/request/create', this.createGameRequest);
        this._router.delete('/games/request/delete/:ownerId/:gameId', this.deleteGameRequest);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
