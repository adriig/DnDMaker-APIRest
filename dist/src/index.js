"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const leerTeclado_1 = require("./util/leerTeclado");
//let miRaza = new Raza ("Elfo", [new Stats("asd", "asd", 2)], [new Habilidades("asd", "asd")], "asd", ["asd", "asd"], 3)
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    let nombre = (0, leerTeclado_1.leerTeclado)("Introduce nombre de raza: ");
    let alineacion = (0, leerTeclado_1.leerTeclado)("Introduce nombre: ");
    let personalidad = (0, leerTeclado_1.leerTeclado)("Introduce personalidad");
});
main();
