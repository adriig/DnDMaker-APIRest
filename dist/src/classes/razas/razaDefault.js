"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubRaza = exports.Raza = void 0;
class Raza {
    constructor(id, NombreRaza, Multiplicadores, Habilidades, Origen, Nombres) {
        this._id = id;
        this._NombreRaza = NombreRaza;
        this._Multiplicadores = Multiplicadores;
        this._Habilidades = Habilidades;
        this._Origen = Origen;
        this._Nombres = Nombres;
    }
}
exports.Raza = Raza;
class SubRaza extends Raza {
    constructor(_id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Subtipo, _Nombres, RazaDependiente, OrigenSubRaza) {
        super(_id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres);
        this._RazaDependiente = RazaDependiente;
        this._OrigenSubRaza = OrigenSubRaza;
    }
}
exports.SubRaza = SubRaza;
