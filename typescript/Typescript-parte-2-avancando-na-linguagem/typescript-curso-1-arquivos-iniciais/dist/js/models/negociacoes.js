export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listaNegociacoes() {
        return this.negociacoes;
    }
}
