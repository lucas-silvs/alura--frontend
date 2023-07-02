export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // utilizando ReadonlyArray para evitar acesso de escrita no array retornado.
    listaNegociacoes() {
        return this.negociacoes;
    }
}
