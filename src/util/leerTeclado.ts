import { fail } from 'assert'
import { parse } from 'path/posix'
import readline from 'readline'
let readlineI: readline.Interface

let leelinea = (prompt: string) => {
    readlineI = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise<string>( (resuelta: any, rechazada: any) => {
        readlineI.question(`${prompt}: `, (cadenaEntrada: string) => {
            resuelta (cadenaEntrada)
           }
        )
    })
}
export let leerTeclado = async (prompt: string) => {
    let entrada = await leelinea(prompt)
    readlineI.close() 
    return entrada
}