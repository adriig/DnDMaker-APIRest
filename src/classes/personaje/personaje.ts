import { Clase } from "../clases/claseDefault";
import { Stats } from "./estadísticas";
import { Estadisticas } from "./estadísticas";
import { Habilidades } from "../habilidadesBase";
import { Raza } from "../razas/razaDefault";
import { Hechizos } from "../spells/hechizos";

export class Personaje {
    public _id: number
    public _NombrePersonaje: string;
    public _Alineacion: string;
    public _Lore: string;
    public _Personalidad: string;
    private _IdOwner: string;
    public _Raza: Raza;
    public _Clase: Clase;
    public _Hechizos: Hechizos;
    public _Estadisticas: Estadisticas;
    public _Habilidades: Habilidades;

    public constructor(id: number, NombrePersonaje: string, Alineacion: string, Lore: string, Personalidad: string, IdOwner: string, Raza: Raza, Clase: Clase, Hechizos: Hechizos, Estadisticas: Estadisticas, Habilidades: Habilidades) {
        this._id=id
        this._NombrePersonaje=NombrePersonaje;
        this._Alineacion = Alineacion;
        this._Lore = Lore;
        this._Personalidad = Personalidad;
        this._IdOwner=IdOwner;
        this._Raza = Raza;
        this._Clase = Clase;
        this._Hechizos = Hechizos
        this._Estadisticas = Estadisticas
        this._Habilidades = Habilidades
    }
}