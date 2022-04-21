import {Request, Response, Router } from 'express'
import { Raza, SubRaza } from '../classes/razas/razaDefault'
import { db } from '../database/database'
import { iRaza, iSubraza, RazaDB } from '../model/raza'
import { iUsers, UsersDB } from '../model/usuarios'

let dSchemaRaza : iRaza = {
    _id: null,
    _NombreRaza: null, 
    _Multiplicadores: null,
    _Habilidades: null,
    _Origen: null,
    _Nombres: null,
}

let dSchemaSubRaza : iSubraza = {
    _id: null,
    _NombreRaza: null, 
    _Multiplicadores: null,
    _Habilidades: null,
    _Origen: null,
    _Nombres: null,
    _RazaDependiente: null,
    _OrigenSubRaza: null
}

let dSchemaUser : iUsers = {
    _id: null,
    _Nombre: null, 
    _Contraseña: null,
    _Tipo: null,
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

    private addRaza = async (req: Request, res: Response) => {
        const {Id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaRaza = {
                _id: Id,
                _NombreRaza: _NombreRaza, 
                _Multiplicadores: _Multiplicadores,
                _Habilidades: _Habilidades,
                _Origen: _Origen,
                _Nombres: _Nombres,
          }
          const oSchema = new RazaDB(dSchemaRaza)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }

    private addSubRaza = async (req: Request, res: Response) => {
        const {Id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres, _RazaDependiente, _OrigenSubRaza} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaSubRaza = {
                _id: Id,
                _NombreRaza: _NombreRaza, 
                _Multiplicadores: _Multiplicadores,
                _Habilidades: _Habilidades,
                _Origen: _Origen,
                _Nombres: _Nombres,
                _RazaDependiente: _RazaDependiente,
                _OrigenSubRaza: _OrigenSubRaza
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
        const {Id, Nombre, Contraseña, Tipo} = req.body
        await db.conectarBD()
        .then( async (mensaje) => {
            dSchemaUser = {
                _id: Id,
                _Nombre: Nombre, 
                _Contraseña: Contraseña,
                _Tipo: Tipo,
          }
          const oSchema = new RazaDB(dSchemaRaza)
          await oSchema.save()
        }).catch((mensaje) => {
            res.send(mensaje)
        })
    }


    misRutas(){
        this._router.get('/Razas/get', this.getRazas)
        this._router.post('/Razas/ropa/add', this.addSubRaza)
        this._router.post('/Razas/movil/add', this.addRaza)
        this._router.get('/Razas/search/:id', this.searchRaza)
        this._router.delete('/Razas/delete/:id', this.deleteRaza)

        this._router.get('/Users/get', this.getUsers)
        this._router.post('/Users/add', this.addUser)
        this._router.post('/Users/delete', this.deleteUser)
        this._router.get('/Users/search/:id', this.searchUser)
    }
}
const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
