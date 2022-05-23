import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const classSchema = new Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Nombre: {
        type: String
    },

    _Habilidades: {
        type: Array
    },

    _Descripcion: {
        type: String
    },

    _PG: {
        type: Array
    },

    _Salvacion: {
        type: Array
    },

    _IdOwner: {
        type: String
    },

    _Type: {
        type: String
    }
})

export type iClass = {
    _id: number | null, // para acceder en la subclase
    _Nombre: string | null,
    _Habilidades: string | null,
    _Descripcion: string | null,
    _PG: number | null,
    _Salvacion: string | null,
    _IdOwner: string | null,
    _Type: string | null,
}
// La colección de la BD (Plural siempre)
export const ClassDB = model('classes', classSchema)

