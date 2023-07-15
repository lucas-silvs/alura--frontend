import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...parametros: Imprimivel[]) {
    for (let objeto of parametros) {

        console.log(objeto.paraTexto());
    }
}