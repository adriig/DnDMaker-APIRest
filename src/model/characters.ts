import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const charactersSchema = new Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _NombrePersonaje: {
        type: String
    },

    _Alineacion: {
        type: String
    },

    _Personalidad: {
        type: String
    },

    _Raza: {
        type: String
    },

    _Clase: {
        type: String
    },

    _Hechizos: {
        type: String
    },

    _Estadisticas: {
        type: String
    },

    _Habilidades: {
        type: Number
    },
})

export type iCharacter = {
    _id: number | null, // para acceder en la subclase
    _NombrePersonaje: string | null,
    _Personalidad: string | null,
    _Raza: number | null,
    _Clase: string | null,
}
// La colección de la BD (Plural siempre)
export const CharacterDB = model('characters', charactersSchema)