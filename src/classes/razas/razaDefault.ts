import { Stats } from "../personaje/estadísticas";
import { Habilidades } from "../habilidadesBase";

export class Raza {
    public _id: number;
    public _NombreRaza: string;
    public _Multiplicadores: Array<Stats>;
    public _Habilidades: Array<Habilidades>;
    public _Origen: string;
    public _Nombres: Array<String>;
    public _IdOwner: string;

    public constructor(id: number, NombreRaza: string, Multiplicadores: Array<Stats>, Habilidades: Array<Habilidades>, Origen: string, Nombres: Array<String>, _IdOwner: string){
        this._id=id
        this._NombreRaza=NombreRaza;
        this._Multiplicadores = Multiplicadores;
        this._Habilidades = Habilidades;
        this._Origen = Origen;
        this._Nombres = Nombres;
        this._IdOwner = _IdOwner
    }
}

export class SubRaza extends Raza {
    public _RazaDependiente: string;
    public _OrigenSubRaza: string;
    
    public constructor(_id: number, _NombreRaza: string, _Multiplicadores: Array<Stats>, _Habilidades: Array<Habilidades>, _Origen: string, _IdOwner: string, _Subtipo: string, _Nombres: Array<String>, RazaDependiente: string, OrigenSubRaza: string) {
        super(_id, _NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres, _IdOwner);
        this._RazaDependiente = RazaDependiente;
        this._OrigenSubRaza=OrigenSubRaza
    }
}