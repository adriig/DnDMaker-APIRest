import {Request, Response, Router } from 'express'
import { Raza, SubRaza } from '../classes/razas/razaDefault'
import { db } from '../database/database'
import { iRaza, iSubraza, RazaDB } from '../model/raza'
import { iHechizo, SpellDB } from '../model/spells'
import { iUsers, UsersDB } from '../model/usuarios'
import { Personaje } from '../classes/personaje/personaje'
import { iCharacter, CharacterDB } from '../model/characters'
import { iClass, ClassDB} from '../model/clase'

let dSchemaClass: iClass = {
    _id:  null, // para acceder en la subclase
    _Nombre:  null,
    _Habilidades: null,
    _Descripcion: null,
    _PG: null,
    _Salvacion: null,
    _IdOwner: null,
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
        const valor = req.params.idClass
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await UsersDB.updateOne({_id: id}, {$push: {_ClasesSelected: valor}})
            res.json(query)
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
          console.log(dSchemaCharacter)
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
        const {_id, _Nombre, _Habilidades, _Descripcion, _PG, _Salvacion, _IdOwner, _Type} = req.body
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
        this._router.put('Users/addClass/:id/:valuie', this.addClassToUser)

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
    } 
} 
const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
