export class Negociacao {
    #dsata;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    // cria getters e setters
    get data() {
        return this.#data;
    }
    

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    } 

    get volume() {
        return this.#quantidade * this.#valor;
    }

    toString() {
        return `
            Data: ${this.#data}
            Quantidade: ${this.#quantidade}
            Valor: ${this.#valor}
            Volume: ${this.volume}
        `;
    }

}