import {Request, Response, Router } from 'express'
import { Raza, SubRaza } from '../classes/razas/razaDefault'
import { db } from '../database/database'
import { iRaza, iSubraza, RazaDB } from '../model/raza'
import { iHechizo, SpellDB } from '../model/spells'
import { iUsers, UsersDB } from '../model/usuarios'
import { Personaje } from '../classes/personaje/personaje'
import { iCharacter, CharacterDB } from '../model/characters'
import { iClass, ClassDB} from '../model/clase'
import { Users } from '../classes/users/user'
import { iPosts, PostsDB } from '../model/posts'
import { Comments } from '../classes/posts/comments'
import { Posts } from '../classes/posts/posts'
import { GameRequestDB, iGameRequest } from '../model/gameRequest'
import { GameDB, iGame } from '../model/game'

let dSchemaClass: iClass = {
    _id:  null, // para acceder en la subclase
    _Nombre:  null,
    _Habilidades: null,
    _Descripcion: null,
    _PG: null,
    _Salvacion: null,
    _IdOwner: null,
    _Public: null,
    _Type: null
}

let dSchemaCharacter : iCharacter = {
    _id: null,
    _NombrePersonaje: null,
    _Alineacion: null,
    _Lore: null,
    _Personalidad: null,
    _IdOwner: null,
    _Raza: null,
    _Clase: null,
    _Hechizos: null,
    _Estadisticas: null,
    _Habilidades: null,

}

let dSchemaRaza : iRaza = {
    _id: null,
    _NombreRaza: null, 
    _Multiplicadores: null,
    _Habilidades: null,
    _Origen: null,
    _Nombres: null,
    _IdOwner: null
}

let dSchemaSubRaza : iSubraza = {
    _id: null,
    _NombreRaza: null, 
    _Multiplicadores: null,
    _Habilidades: null,
    _Origen: null,
    _Nombres: null,
    _RazaDependiente: null,
    _OrigenSubRaza: null,
    _IdOwner: null
}

let dSchemaUser : iUsers = {
    _id: null, // para acceder en la subclase
    _Nombre: null,
    _ClasesSelected: null,
    _RacesSelected: null
}

let dSchemaSpells : iHechizo = {
    _id: null, // para acceder en la subclase
    _Nombre: null,
    _Tipo: null,
    _Duracion: null,
    _Descripcion: null,
}

let dSchemaPosts: iPosts = {
    _id: null,
    _Titulo: null,
    _Texto: null,
    _Likes: null,
    _Dislikes: null,
    _Date: null,
    _Tipo: null,
    _IdOwner: null,
    _Comentarios: null
}

let dSchemaGame: iGame = {
    _id: null,
    owner: null,
    name: null,
    maxPlayers: null,
    createdAt: null,
    participants: []
}

let dSchemaGameRequest: iGameRequest = {
    _id: null,
    requester: null,
    gameId: null,
    createdAt: null
}

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }


    /**
     * 
     * Rutas para Aplicación CRUD de Productos.
     * 
    */

     private getRazas = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await RazaDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchRaza = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await RazaDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteRaza = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await RazaDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getmyRaces = async (req: Request, res: Response) => {
        const valor = req.params.idOwner        
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await RazaDB.find({_IdOwner: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addRaza = async (req: Request, res: Response) => {
        const {_id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres, _IdOwner} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaRaza = {
                _id: _id,
                _NombreRaza: _NombreRaza, 
                _Multiplicadores: _Multiplicadores,
                _Habilidades: _Habilidades,
                _Origen: _Origen,
                _Nombres: _Nombres,
                _IdOwner: _IdOwner
          }
          console.log(req.body)
          const oSchema = new RazaDB(dSchemaRaza)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addSubRaza = async (req: Request, res: Response) => {
        const {_id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres, _RazaDependiente, _OrigenSubRaza, _IdOwner} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaSubRaza = {
                _id: _id,
                _NombreRaza: _NombreRaza, 
                _Multiplicadores: _Multiplicadores,
                _Habilidades: _Habilidades,
                _Origen: _Origen,
                _Nombres: _Nombres,
                _RazaDependiente: _RazaDependiente,
                _OrigenSubRaza: _OrigenSubRaza,
                _IdOwner: _IdOwner
          }
          const oSchema = new RazaDB(dSchemaSubRaza)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getUsers = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await UsersDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchUser = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await UsersDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteUser = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await UsersDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addUser = async (req: Request, res: Response) => {
        const {_id, _Nombre, _ClasesSelected, _RacesSelected} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaUser = {
                _id: _id, // para acceder en la subclase
                _Nombre: _Nombre, 
                _ClasesSelected: _ClasesSelected,
                _RacesSelected: _RacesSelected
          }
          console.log(dSchemaUser)
          const oSchema = new UsersDB(dSchemaUser)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addClassToUser = async (req: Request, res: Response) => {
        const id = req.params.id
        const idValue = req.params.valueId
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await UsersDB.findOneAndUpdate({_id: id}, {$push: {_ClassesSelected: idValue}})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private removeClassInUser = async (req: Request, res: Response) => {
        const id = req.params.id
        const idValue = req.params.valueId
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await UsersDB.findOne({_id: id})
            const newUser = new Users(query._id, query._ClassesSelected, query._RacesSelected)
            const feedback = newUser.deleteMyClass(idValue)
            console.log(feedback)
            const query2  = await UsersDB.findOneAndUpdate({_id: id}, {_ClassesSelected: feedback})
            res.json(query2)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private existClassInUser = async (req: Request, res: Response) => {
        const id = req.params.id
        const idValue = req.params.valueId
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await UsersDB.findOne({_id: id})
            const newUser = new Users(query._id, query._ClassesSelected, query._RacesSelected)
            let feedback = newUser.searchMyClass(idValue)
            res.send(feedback)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getClassesOfUser = async (req: Request, res: Response) => {
        const id = req.params.id
        const idValue = req.params.valueId
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await UsersDB.findOne({_id: id})
            res.send(query._ClassesSelected)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getSpells = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await SpellDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchSpells = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await SpellDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteSpells = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await SpellDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addSpells = async (req: Request, res: Response) => {
        const {Id, Nombre, Tipo, Duracion, Descripcion} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaSpells = {
                _id: Id, // para acceder en la subclase
                _Nombre: Nombre,
                _Tipo: Tipo,
                _Duracion: Duracion,
                _Descripcion: Descripcion,
          }
          console.log(dSchemaSpells)
          const oSchema = new SpellDB(dSchemaSpells)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getCharacters = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await CharacterDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getmyCharacters = async (req: Request, res: Response) => {
        const valor = req.params.idOwner        
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await CharacterDB.find({_IdOwner: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }


    private searchCharacter = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await CharacterDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addCharacter = async (req: Request, res: Response) => {
        const {_id, _Alineacion, _Clase, _Estadisticas, _Personalidad, _IdOwner, _Raza, _Lore, _NombrePersonaje, _Hechizos , _Habilidad} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaCharacter = {
                _id: _id,
                _NombrePersonaje: _NombrePersonaje,
                _Alineacion: _Alineacion,
                _Lore: _Lore,
                _Personalidad: _Personalidad,
                _IdOwner: _IdOwner,
                _Raza: _Raza,
                _Clase: _Clase,
                _Hechizos: _Hechizos,
                _Estadisticas: _Estadisticas,
                _Habilidades: _Habilidad,
          }
          const oSchema = new CharacterDB(dSchemaCharacter)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteCharacter = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await CharacterDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getClass = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ClassDB.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addClass = async (req: Request, res: Response) => {
        const {_id, _Nombre, _Habilidades, _Descripcion, _PG, _Salvacion, _IdOwner, _Public, _Type} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaClass = {
                _id: _id,
                _Nombre: _Nombre, 
                _Habilidades: _Habilidades,
                _Descripcion: _Descripcion,
                _PG: _PG,
                _Salvacion: _Salvacion,
                _IdOwner: _IdOwner,
                _Public: _Public,
                _Type: _Type
          }
          console.log(dSchemaClass)
          const oSchema = new ClassDB(dSchemaClass)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private searchClass = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ClassDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteClass = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await ClassDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getmyClasses = async (req: Request, res: Response) => {
        const valor = req.params.idOwner        
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await ClassDB.find({_IdOwner: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getpickeableClasses = async (req: Request, res: Response) => {
        const valor = req.params.idOwner   
        const value = req.params.array     
        const array = value.split(',')
        await db.conectarBD()
        .then( async (mensaje) => {
            // const query = await ClassDB.find({$and: [{_Public: true}, { _idOwner: array}]})
            console.log(array)
            const query  = await ClassDB.find({$and: [{_Public: true}, {$or: [{_id: {$in: array}}, {_idOwner: valor}]}]})
            console.log("Uwu")
            console.log(query)
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje) 
        })
    }


    private getPosts = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await PostsDB.aggregate([{$project: {"_id":1, "_Titulo":1, "_Date":1, "_Texto":1, "_Likes":1, "_Dislikes":1, "_Tipo":1, "_IdOwner":1, "_Comentarios":1, LikesNumber: {$size: "$_Likes"}}}, {$sort: {LikesNumber: -1}}])
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getmyPosts = async (req: Request, res: Response) => {
        const valor = req.params.idOwner        
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await PostsDB.aggregate([{$match: {_IdOwner: valor}}, {$project: {"_id":1, "_Titulo":1, "_Date":1, "_Texto":1, "_Likes":1, "_Dislikes":1, "_Tipo":1, "_IdOwner":1, "_Comentarios":1, LikesNumber: {$size: "$_Likes"}}}, {$sort: {LikesNumber: -1}}])
            console.log(query)
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }


    private searchPost = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await PostsDB.findOne({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private getPostPerType = async (req: Request, res: Response) => {
        const valor = req.params.type
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await PostsDB.find({_Tipo: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addPost = async (req: Request, res: Response) => {
        const {_id, _Titulo, _Texto, _Likes, _Dislikes, _Date, _Tipo, _IdOwner, _Comentarios} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaPosts = {
                _id: _id,
                _Titulo: _Titulo,
                _Texto: _Texto,
                _Likes: _Likes,
                _Dislikes: _Dislikes,
                _Date: _Date,
                _Tipo: _Tipo,
                _IdOwner: _IdOwner,
                _Comentarios: _Comentarios     
          }
          console.log(dSchemaCharacter)
          const oSchema = new PostsDB(dSchemaPosts)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deletePost = async (req: Request, res: Response) => {
        const valor = req.params.id
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await PostsDB.findOneAndDelete({_id: valor})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addComment = async (req: Request, res: Response) => {
        const id = req.params.id
        const {_id, _Date, _IdOwner, _Texto} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            const comentario = new Comments (_id, _IdOwner, _Date, _Texto)
            const query  = await PostsDB.findOneAndUpdate({_id: id}, {$push: {_Comentarios: comentario}})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }


    private likePost = async (req: Request, res: Response) => {
        const id = req.params.id
        const idvalue = req.params.idvalue
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(id)
            const query  = await PostsDB.findOneAndUpdate({_id: id}, {$push: {_Likes: idvalue}})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private dislikePost = async (req: Request, res: Response) => {
        const id = req.params.id
        const idvalue = req.params.idvalue
        console.log("DATOS: "+id+idvalue)
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await PostsDB.findOneAndUpdate({_id: id}, {$push: {_Dislikes: idvalue}})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }


    private unDislikePost = async (req: Request, res: Response) => {
        const id = req.params.id
        const idvalue = req.params.idvalue
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await PostsDB.findOne({_id: id})
            const myPost = new Posts(query._id, query._Titulo, query._Texto, query._Likes, query._Dislikes, query._Date, query._Tipo, query._IdOwner, query._Comentarios)
            const feedback = myPost.removeDislike(idvalue)
            const query2 = await PostsDB.findOneAndUpdate({_id: id}, {_Dislikes: feedback})
            res.json(query2)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private unLikePost = async (req: Request, res: Response) => {
        const id = req.params.id
        const idvalue = req.params.idvalue
        await db.conectarBD()
        .then( async (mensaje) => {
            const query  = await PostsDB.findOne({_id: id})
            const myPost = new Posts(query._id, query._Titulo, query._Texto, query._Likes, query._Dislikes, query._Date, query._Tipo, query._IdOwner, query._Comentarios)
            const feedback = myPost.removeLike(idvalue)
            const query2 = await PostsDB.findOneAndUpdate({_id: id}, {_Likes: feedback})
            res.json(query2)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private listGames = async (req: Request, res: Response) => {
        await this.listGameFromFilter(req, res, {})
    }

    private listGame = async (req: Request, res: Response) => {
        await this.listGameFromFilter(req, res, {
            gameId: req.params.gameId
        })
    }

    private listGamesFromOwner = async (req: Request, res: Response) => {
        await this.listGameFromFilter(req, res, {
            owner: req.params.owner
        })
    }

    private listGameFromFilter = async (req: Request, res: Response, filter: {}) => {
        await db.conectarBD()
            .then(async () => {
                const query = await GameDB.find(filter)
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })
    }

    private createGame = async (req: Request, res: Response) => {
        const {
            _id, _owner, _name,
            _maxPlayers, _createdAt,
            _participants
        } = req.body

        await db.conectarBD().then(async () => {
            dSchemaGame = {
                _id: _id,
                owner: _owner,
                name: _name,
                maxPlayers: _maxPlayers,
                createdAt: _createdAt,
                participants: _participants
            }
            const schema = new GameDB(dSchemaGame)
            await schema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteGame = async (req: Request, res: Response) => {
        const gameId = req.params.gameId
        await db.conectarBD()
            .then(async () => {
                const query = await GameDB.findOneAndDelete({ _id: gameId })
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })
    }

    private createGameRequest = async (req: Request, res: Response) => {
        const { _id, _requester, _gameId, _createdAt } = req.body

        await db.conectarBD().then(async () => {
            dSchemaGameRequest = {
                _id: _id,
                requester: _requester,
                gameId: _gameId,
                createdAt: _createdAt
            }
            const schema = new GameRequestDB(dSchemaGameRequest)
            await schema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private deleteGameRequest = async (req: Request, res: Response) => {
        const { gameId, ownerId } = req.params
        await db.conectarBD()
            .then(async () => {
                const query = await GameRequestDB.findOneAndDelete({
                    gameId: gameId,
                    requester: ownerId
                })
                res.json(query)
            }).catch((mensaje) => {
                res.send(mensaje)
            })
    }

    private getGameRequestsFromGameId = async (req: Request, res: Response) => {
        await this.getGameRequestFromFilter(req, res, {
            gameId: req.params.gameId
        })
    }

    private getGameRequestsFromOwner = async (req: Request, res: Response) => {
        await this.getGameRequestFromFilter(req, res, {
            requester: req.params.ownerId
        })
    }

    private getGameRequestsFromOwnerInGame = async (req: Request, res: Response) => {
        await this.getGameRequestFromFilter(req, res, {
            requester: req.params.ownerId,
            gameId: req.params.gameId
        })
    }

    private getGameRequestFromFilter = async (req: Request, res: Response, filter: {}) => {
        await db.conectarBD()
            .then(async () => {
                const query = await GameRequestDB.find(filter)
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })
    }

    misRutas(){
        this._router.get('/Razas/get', this.getRazas)
        this._router.post('/Razas/Sub/add', this.addSubRaza)
        this._router.post('/Razas/add', this.addRaza)
        this._router.get('/Razas/search/:id', this.searchRaza)
        this._router.delete('/Razas/delete/:id', this.deleteRaza)
        this._router.get('/Razas/getmy/:idOwner', this.getmyRaces)

        this._router.get('/Users/get', this.getUsers)
        this._router.post('/Users/add', this.addUser)
        this._router.delete('/Users/delete', this.deleteUser)
        this._router.get('/Users/search/:id', this.searchUser)
        this._router.get('/Users/getClasses/:id', this.getClassesOfUser)
        this._router.put('/Users/addClass/:id/:valueId', this.addClassToUser)
        this._router.get('/Users/existClassInUsers/:id/:valueId', this.existClassInUser)
        this._router.get('/Users/deleteClassInUser/:id/:valueId', this.removeClassInUser)

        this._router.get('/Spells/get', this.getSpells)
        this._router.post('/Spells/add', this.addSpells)
        this._router.delete('/Spells/delete', this.deleteSpells)
        this._router.get('/Spells/search/:id', this.searchSpells)

        this._router.get('/Characters/get', this.getCharacters)
        this._router.get('/Characters/getmy/:idOwner', this.getmyCharacters)
        this._router.get('/Characters/search/:id', this.searchCharacter)
        this._router.post('/Characters/add', this.addCharacter)
        this._router.delete('/Characters/delete/:id', this.deleteCharacter)

        this._router.get('/Classes/get', this.getClass)
        this._router.post('/Classes/add', this.addClass)
        this._router.post('/Classes/search/:id', this.searchClass)
        this._router.delete('/Classes/delete/:id', this.deleteClass)
        this._router.get('/Classes/getmy/:idOwner', this.getmyClasses)
        this._router.get('/Classes/getpickeable/:idOwner/:array', this.getpickeableClasses)

        this._router.get('/Posts/get', this.getPosts)
        this._router.get('/Posts/getmy/:idOwner', this.getmyPosts)
        this._router.get('/Posts/search/:id', this.searchPost)
        this._router.delete('/Posts/delete/:id', this.deletePost)
        this._router.post('/Posts/add', this.addPost)
        this._router.get('/Posts/getpertype/:type', this.getPostPerType)
        this._router.put('/Posts/addComment/:id', this.addComment)
        this._router.get('/Posts/like/:id/:idvalue', this.likePost)
        this._router.get('/Posts/dislike/:id/:idvalue', this.dislikePost)
        this._router.get('/Posts/unlike/:id/:idvalue', this.unLikePost)
        this._router.get('/Posts/undislike/:id/:idvalue', this.unDislikePost)

        this._router.get('/games/get', this.listGames)
        this._router.get('/games/get/:gameId', this.listGame)
        this._router.get('/games/from/:owner', this.listGamesFromOwner)
        this._router.post('/games/create', this.createGame)
        this._router.delete('/games/delete/:gameId', this.deleteGame)

        this._router.get('/games/request/from/:ownerId', this.getGameRequestsFromOwner)
        this._router.get('/games/request/from/:ownerId/:gameId', this.getGameRequestsFromOwnerInGame)
        this._router.get('/games/request/get/:gameId', this.getGameRequestsFromGameId)
        this._router.post('/games/request/create', this.createGameRequest)
        this._router.delete('/games/request/delete/:ownerId/:gameId', this.deleteGameRequest)
    } 
} 
const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
