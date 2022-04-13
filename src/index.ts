import { Stats } from "./classes/personaje/estadísticas";
import { Habilidades } from "./classes/habilidadesBase";
import { Raza } from "./classes/razas/razaDefault";
import { leerTeclado } from './util/leerTeclado'

//let miRaza = new Raza ("Elfo", [new Stats("asd", "asd", 2)], [new Habilidades("asd", "asd")], "asd", ["asd", "asd"], 3)
let main = async () => {
    let nombre = leerTeclado("Introduce nombre de raza: ")
    let alineacion = leerTeclado("Introduce nombre: ")
    let personalidad = leerTeclado("Introduce personalidad")
}
main()