import { Stats } from "../personaje/estadísticas";
import { Habilidades } from "../habilidadesBase";

export class Hechizos {
    public _Nombre: string;
    public _Tipo: string;
    public _Duracion: number;
    public _Descripcion: Array<String>;

    public constructor(Nombre: string, Tipo: string, Duracion: number, Descripcion: Array<String> ){
        this._Nombre=Nombre;
        this._Tipo = Tipo;
        this._Duracion = Duracion;
        this._Descripcion = Descripcion;
    }
}