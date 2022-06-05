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
    removeDislike(value) {
        for (let i = 0; i < this._Dislikes.length; i++) {
            if (this._Dislikes[i] == value) {
                this._Dislikes.splice(i, 1);
            }
        }
        return this._Dislikes;
    }
    removeLike(value) {
        for (let i = 0; i < this._Likes.length; i++) {
            if (this._Likes[i] == value) {
                this._Likes.splice(i, 1);
            }
        }
        return this._Likes;
    }
    existReaction(value) {
        let interactions = new Map();
        for (let i = 0; i < this._Likes.length; i++) {
            if (this._Likes[i] == value) {
                return 1;
            }
        }
        for (let i = 0; i < this._Dislikes.length; i++) {
            if (this._Dislikes[i] == value) {
                return -1;
            }
        }
        return 0;
    }
}
exports.Posts = Posts;
