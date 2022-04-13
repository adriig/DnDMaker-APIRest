import { Clase } from "../clases/claseDefault";
import { Stats } from "./estadísticas";
import { Estadisticas } from "./estadísticas";
import { Habilidades } from "../habilidadesBase";
import { Raza } from "../razas/razaDefault";
import { Hechizos } from "../spells/hechizos";

export class Personaje {
    public _NombrePersonaje: string;
    public _Alineacion: string;
    public _Personalidad: string;
    public _Raza: Raza;
    public _Clase: Clase;
    public _Hechizos: Hechizos;
    public _Estadisticas: Estadisticas;
    public _Habilidades: Habilidades;

    public constructor(NombrePersonaje: string, Alineacion: string, Personalidad: string, Raza: Raza, Clase: Clase, Hechizos: Hechizos, Estadisticas: Estadisticas, Habilidades: Habilidades) {
        this._NombrePersonaje=NombrePersonaje;
        this._Alineacion = Alineacion;
        this._Personalidad = Personalidad;
        this._Raza = Raza;
        this._Clase = Clase;
        this._Hechizos = Hechizos
        this._Estadisticas = Estadisticas
        this._Habilidades = Habilidades
    }
}