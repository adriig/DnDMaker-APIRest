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
let dSchemaClass = {
    _id: null,
    _Nombre: null,
    _Habilidades: null,
    _Descripcion: null,
    _PG: null,
    _Salvacion: null,
    _IdOwner: null,
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
        this.existClassInUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idValue = req.params.valueId;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield usuarios_1.UsersDB.findOne({ _id: id });
                const newUser = new user_1.Users(query._id, query._ClassesSelected, query._RacesSelected);
                let feedback = newUser.searchMyClass(idValue);
                return feedback;
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
                console.log(dSchemaCharacter);
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
            const { _id, _Nombre, _Habilidades, _Descripcion, _PG, _Salvacion, _IdOwner, _Type } = req.body;
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
        this._router.put('/Users/addClass/:id/:valueId', this.addClassToUser);
        this._router.get('/Users/existClassInUsers/:id/:valueId', this.existClassInUser);
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
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
