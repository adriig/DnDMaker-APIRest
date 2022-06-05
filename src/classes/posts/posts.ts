import {Comments} from './comments'

export class Posts {
    public _id: number;
    public _Titulo: string;
    public _Texto: string;
    public _Likes: Array<string>;
    public _Dislikes: Array<string>;
    public _Date: Date;
    public _Tipo: string;
    public _IdOwner: string;
    public _Comentarios: Array<Comments>

    public constructor(id: number, Titulo: string, Texto: string, Likes: Array<string>, Dislikes: Array<string>, Date: Date, Tipo: string, IdOwner: string, Comentarios: Array<Comments>){
        this._id=id
        this._Titulo=Titulo;
        this._Texto = Texto
        this._Likes = Likes;
        this._Dislikes = Dislikes;
        this._Date = Date
        this._Tipo = Tipo
        this._IdOwner = IdOwner
        this._Comentarios = Comentarios
    }

    removeDislike(value: string) {
        for(let i=0; i<this._Dislikes.length; i++) {
            if(this._Dislikes[i]==value) {
                this._Dislikes.splice(i,1)
            }
        }
        return this._Dislikes
    }

    removeLike(value: string) {
        for(let i=0; i<this._Likes.length; i++) {
            if(this._Likes[i]==value) {
                this._Likes.splice(i,1)
            }
        }
        return this._Likes
    }

    existReaction(value: string) {
        let interactions: Map<string, number> = new Map<string, number>();
        for(let i=0; i<this._Likes.length; i++) {
            if(this._Likes[i]==value) {
                return 1
            }
        }
        for(let i=0; i<this._Dislikes.length; i++) {
            if(this._Dislikes[i]==value) {
                return -1
            }
        }
        return 0
    }
}