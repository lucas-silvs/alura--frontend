export class Negociacao {
    private _data: Date;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // cria getters e setters
    get data() {
        return this._data;
    }
    

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    } 

    get volume() {
        return this._quantidade * this._valor;
    }

    toString() {
        return `
            Data: ${this._data}
            Quantidade: ${this._quantidade}
            Valor: ${this._valor}
            Volume: ${this.volume}
        `;
    }

}