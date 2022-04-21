import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const spellSchema = new Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Nombre: {
        type: String
    },

    _Tipo: {
        type: String
    },

    _Duracion: {
        type: Number
    },

    _Descripcion: {
        type: String
    },
})

export type iHechizo = {
    _id: number | null, // para acceder en la subclase
    _Nombre: string | null,
    _Tipo: string | null,
    _Duracion: number | null,
    _Descripcion: string | null,
}
// La colección de la BD (Plural siempre)
export const SpellDB = model('hechizos', spellSchema)