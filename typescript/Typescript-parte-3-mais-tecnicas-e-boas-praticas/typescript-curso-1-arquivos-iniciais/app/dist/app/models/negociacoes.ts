import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];




    public adicionaNegociacao(negociacao : Negociacao) : void {
            this.negociacoes.push(negociacao)
    }

    // utilizando ReadonlyArray para evitar acesso de escrita no array retornado.
    public listaNegociacoes(): readonly Negociacao[] {

        return this.negociacoes; 
    }
}


