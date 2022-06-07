import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const charactersSchema = new Schema({
    _id: {
        type: String // para acceder en la subclase
    },
    _NombrePersonaje: {
        type: String
    },

    _Alineacion: {
        type: String
    },

    _Lore: {
        type: String
    },

    _Personalidad: {
        type: String
    },

    _IdOwner: {
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

    _ImagePath: {
        type: String
    }
})

export type iCharacter = {
    _id: string | null, // para acceder en la subclase
    _NombrePersonaje: string | null,
    _Personalidad: string | null,
    _IdOwner: string | null,
    _Alineacion: string | null,
    _Lore: string | null,
    _Raza: number | null,
    _Hechizos: string | null,
    _Estadisticas: string | null,
    _Habilidades: number | null,
    _Clase: string | null,
    _ImagePath: string | null
}
// La colección de la BD (Plural siempre)
export const CharacterDB = model('characters', charactersSchema)