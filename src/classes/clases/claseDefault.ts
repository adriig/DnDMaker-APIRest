import { Stats } from "../personaje/estadísticas";
import { Habilidades } from "../habilidadesBase";

export class Clase {
    public _Nombre: string;
    public _Habilidades: Array<Habilidades>;
    public _PG: Array<String>;
    public _Salvacion: Array<String>;

    public constructor(Nombre: string, Habilidades: Array<Habilidades>, PG: Array<String>, Salvacion: Array<String> ){
        this._Nombre=Nombre;
        this._Habilidades = Habilidades;
        this._PG = PG;
        this._Salvacion = Salvacion;
        this._Habilidades = Habilidades
    }
}