import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const usersSchema = new Schema({
    _id: {
        type: String // para acceder en la subclase
    },
    _Nombre: {
        type: String
    },
    _ClassesSelected: {
        type: Array
    },
    _RacesSelected: {
        type: Array
    }
})

export type iUsers = {
    _id: string | null, // para acceder en la subclase
    _Nombre: string | null,
    _ClasesSelected: Array<String> | null,
    _RacesSelected: Array<String> | null
  }

// La colección de la BD (Plural siempre)
export const UsersDB = model('webUsers', usersSchema)