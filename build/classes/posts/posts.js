"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
class Posts {
    constructor(id, Titulo, Texto, Likes, Dislikes, Date, Tipo, IdOwner, Comentarios) {
        this._id = id;
        this._Titulo = Titulo;
        this._Texto = Texto;
        this._Likes = Likes;
        this._Dislikes = Dislikes;
        this._Date = Date;
        this._Tipo = Tipo;
        this._IdOwner = IdOwner;
        this._Comentarios = Comentarios;
    }
    updateThings(value) {
        let interactions = new Map();
        if (value == false) {
            this._Dislikes++;
            interactions.set("Dislikes", this._Dislikes);
        }
        else {
            this._Likes++;
            interactions.set("Likes", this._Likes);
        }
        return interactions;
    }
}
exports.Posts = Posts;
