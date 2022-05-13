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
let dSchemaCharacter = {
    _id: null,
    _NombrePersonaje: null,
    _Clase: null,
    _Raza: null,
    _Personalidad: null
};
let dSchemaRaza = {
    _id: null,
    _NombreRaza: null,
    _Multiplicadores: null,
    _Habilidades: null,
    _Origen: null,
    _Nombres: null,
};
let dSchemaSubRaza = {
    _id: null,
    _NombreRaza: null,
    _Multiplicadores: null,
    _Habilidades: null,
    _Origen: null,
    _Nombres: null,
    _RazaDependiente: null,
    _OrigenSubRaza: null
};
let dSchemaUser = {
    _id: null,
    _Nombre: null,
    _Contraseña: null,
    _Tipo: null,
};
let dSchemaSpells = {
    _id: null,
    _Nombre: null,
    _Tipo: null,
    _Duracion: null,
    _Descripcion: null,
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
        this.addRaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id, NombreRaza, Multiplicadores, Habilidades, Origen, Nombres } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaRaza = {
                    _id: Id,
                    _NombreRaza: NombreRaza,
                    _Multiplicadores: Multiplicadores,
                    _Habilidades: Habilidades,
                    _Origen: Origen,
                    _Nombres: Nombres,
                };
                console.log(req.body);
                const oSchema = new raza_1.RazaDB(dSchemaRaza);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addSubRaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id, NombreRaza, Multiplicadores, Habilidades, Origen, Nombres, RazaDependiente, OrigenSubRaza } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaSubRaza = {
                    _id: Id,
                    _NombreRaza: NombreRaza,
                    _Multiplicadores: Multiplicadores,
                    _Habilidades: Habilidades,
                    _Origen: Origen,
                    _Nombres: Nombres,
                    _RazaDependiente: RazaDependiente,
                    _OrigenSubRaza: OrigenSubRaza
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
            const { Id, Nombre, Contraseña, Tipo } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaUser = {
                    _id: Id,
                    _Nombre: Nombre,
                    _Contraseña: Contraseña,
                    _Tipo: Tipo,
                };
                console.log(dSchemaUser);
                const oSchema = new usuarios_1.UsersDB(dSchemaUser);
                yield oSchema.save();
            })).catch((mensaje) => {
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
        this._router.get('/Users/get', this.getUsers);
        this._router.post('/Users/add', this.addUser);
        this._router.delete('/Users/delete', this.deleteUser);
        this._router.get('/Users/search/:id', this.searchUser);
        this._router.get('/Spells/get', this.getSpells);
        this._router.post('/Spells/add', this.addSpells);
        this._router.delete('/Spells/delete', this.deleteSpells);
        this._router.get('/Spells/search/:id', this.searchSpells);
        this._router.get('/Characters/get', this.getCharacters);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
