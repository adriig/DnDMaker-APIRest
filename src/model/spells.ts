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

    _CategoriaProducto: {
        type: String
    },

    _PrecioBase: {
        type: Number
    },

    _NotaMedia: {
        type: Number
    },

    _Almacenamiento: {
        type: Array
    },
    _Talla: {
        type: Number
    },
    _GBRam: {
        type: Number
    },
    _Megapixeles: {
        type: Number
    },
    _GHz: {
        type: Number
    },
})

export type iProducto = {
    _id: number | null, // para acceder en la subclase
    _NombreProducto: string | null,
    _CategoriaProducto: string | null,
    _PrecioBase: number | null,
    _NotaMedia: number | null,
    _Almacenamiento: Array<any> | null,
}
// La colección de la BD (Plural siempre)
export const SpellDB = model('productos3', spellSchema)