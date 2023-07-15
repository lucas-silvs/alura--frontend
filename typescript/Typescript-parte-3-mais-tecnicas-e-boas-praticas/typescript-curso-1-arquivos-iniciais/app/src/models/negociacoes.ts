import { Modelo } from "../interfaces/Modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{

    private negociacoes: Negociacao[] = [];




    public adicionaNegociacao(negociacao : Negociacao) : void {
            this.negociacoes.push(negociacao)
    }

    // utilizando ReadonlyArray para evitar acesso de escrita no array retornado.
    public listaNegociacoes(): readonly Negociacao[] {

        return this.negociacoes; 
    }


    public paraTexto(): string {
        return JSON.stringify(this.negociacoes)
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.listaNegociacoes());
    }
}


