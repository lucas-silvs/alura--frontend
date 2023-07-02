import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];




    adicionaNegociacao(negociacao : Negociacao) : void {
            this.negociacoes.push(negociacao)
    }

    // utilizando ReadonlyArray para evitar acesso de escrita no array retornado.
    listaNegociacoes(): ReadonlyArray<Negociacao> {

        return this.negociacoes; 
    }
}


