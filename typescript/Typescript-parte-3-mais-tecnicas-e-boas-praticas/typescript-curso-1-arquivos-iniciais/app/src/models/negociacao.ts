import { Modelo } from "../interfaces/Modelo.js";

export class Negociacao implements Modelo<Negociacao> {


    constructor(
        private  _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number){}


    get volume() : Number {
        return this.quantidade * this.valor;
    }
    
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public toString() {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}
        `;
    }

    public static criaDe(dataString :string, quantidadeString :string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
        
    }

    
    public paraTexto(): string {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `
    }

    public ehIgual(negociacao: Negociacao) : boolean {
        return this.data.getDate() === negociacao.data.getDate() &&
        this.data.getMonth() === negociacao.data.getMonth() &&
        this.data.getFullYear() === negociacao.data.getFullYear();
    }

}