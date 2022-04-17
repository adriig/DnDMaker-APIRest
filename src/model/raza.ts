import { Stats } from "fs";
import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
import { Habilidades } from "../classes/habilidadesBase";
// Definimos el Schema
const razasSchema = new Schema({
    _NombreRaza: {
        type: String // para acceder en la subclase
    },
    _Multiplicadores: {
        type: Array 
    },
    _Habilidades: {
        type: Array
    },
    _Origen: {
        type: String
    },
    _Nombres: {
        type: Array
    },
    _RazaDependiente: {
        type: String
    },
    _OrigenSubRaza: {
        type: String
    }
})

export type iRaza = {
    _NombreRaza: string | null, 
    _Multiplicadores: Array<Stats> | null,
    _Habilidades: Array<Habilidades> | null,
    _Origen: string | null,
    _Nombres: Array<String> | null,
}

export type iSubraza = {
    _NombreRaza: string | null, 
    _Multiplicadores: Array<Stats> | null,
    _Habilidades: Array<Habilidades> | null,
    _Origen: string | null,
    _Nombres: Array<String> | null,
    _RazaDependiente: string | null,
    _OrigenSubRaza: string | null
}


// La colección de la BD (Plural siempre)
export const RazaDB = model('Razas', razasSchema)