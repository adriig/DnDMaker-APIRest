import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const usersSchema = new Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Nombre: {
        type: String
    },

    _Contraseña: {
        type: String
    },

    _Tipo: {
        type: String
    }
})

export type iUsers = {
    _id: number | null, // para acceder en la subclase
    _Nombre: string | null,
    _Contraseña: string | null,
    _Tipo: string | null
  }

// La colección de la BD (Plural siempre)
export const UsersDB = model('webUsers', usersSchema)