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
const usuarios_1 = require("../model/usuarios");
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
            const { Id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaRaza = {
                    _id: Id,
                    _NombreRaza: _NombreRaza,
                    _Multiplicadores: _Multiplicadores,
                    _Habilidades: _Habilidades,
                    _Origen: _Origen,
                    _Nombres: _Nombres,
                };
                const oSchema = new raza_1.RazaDB(dSchemaRaza);
                yield oSchema.save();
            })).catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.addSubRaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres, _RazaDependiente, _OrigenSubRaza } = req.body;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                dSchemaSubRaza = {
                    _id: Id,
                    _NombreRaza: _NombreRaza,
                    _Multiplicadores: _Multiplicadores,
                    _Habilidades: _Habilidades,
                    _Origen: _Origen,
                    _Nombres: _Nombres,
                    _RazaDependiente: _RazaDependiente,
                    _OrigenSubRaza: _OrigenSubRaza
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
                const oSchema = new raza_1.RazaDB(dSchemaRaza);
                yield oSchema.save();
            })).catch((mensaje) => {
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
        this._router.post('/Razas/ropa/add', this.addSubRaza);
        this._router.post('/Razas/movil/add', this.addRaza);
        this._router.get('/Razas/search/:id', this.searchRaza);
        this._router.delete('/Razas/delete/:id', this.deleteRaza);
        this._router.get('/Users/get', this.getUsers);
        this._router.post('/Users/add', this.addUser);
        this._router.post('/Users/delete', this.deleteUser);
        this._router.get('/Users/search/:id', this.searchUser);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
