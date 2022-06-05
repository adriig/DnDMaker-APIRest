import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
import { Comments } from "../classes/posts/comments";
// Definimos el Schema
const postsSchema = new Schema({
    _id: {
        type: String
    },
    
    _Titulo: {
        type: String
    },
    
    _Texto: { 
        type: String
    },
    _Likes: { 
        type: Array
    },
    
    _Dislikes: {
        type: Array
    },
    
    _Date: { 
        type: Date
    },
    _Tipo: {
        type: String 
    },
    
    _IdOwner: {
        type: String
    },
    _Comentarios: {
        type: Array
    }

})

export type iPosts = {
    _id: string | null;
    _Titulo: string | null;
    _Texto: string | null;
    _Likes: Array<string> | null;
     _Dislikes: Array<string> | null;
    _Date: Date | null;
    _Tipo: string | null;
    _IdOwner: string | null;
    _Comentarios: Array<Comments> | null
}
// La colección de la BD (Plural siempre)
export const PostsDB = model('posts', postsSchema)

