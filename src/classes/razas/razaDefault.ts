import { Stats } from "../personaje/estadísticas";
import { Habilidades } from "../habilidadesBase";

export class Raza {
    public _NombreRaza: string;
    public _Multiplicadores: Array<Stats>;
    public _Habilidades: Array<Habilidades>;
    public _Origen: string;
    public _Nombres: Array<String>;

    public constructor(NombreRaza: string, Multiplicadores: Array<Stats>, Habilidades: Array<Habilidades>, Origen: string, Nombres: Array<String>){
        this._NombreRaza=NombreRaza;
        this._Multiplicadores = Multiplicadores;
        this._Habilidades = Habilidades;
        this._Origen = Origen;
        this._Nombres = Nombres
    }
}

export class SubRaza extends Raza {
    public _RazaDependiente: string;
    public _OrigenSubRaza: string;
    
    public constructor(_NombreRaza: string, _Multiplicadores: Array<Stats>, _Habilidades: Array<Habilidades>, _Origen: string, _Subtipo: string, _Nombres: Array<String>, RazaDependiente: string, OrigenSubRaza: string) {
        super(_NombreRaza, _Multiplicadores, _Habilidades, _Origen, _Nombres);
        this._RazaDependiente = RazaDependiente;
        this._OrigenSubRaza=OrigenSubRaza
    }
}