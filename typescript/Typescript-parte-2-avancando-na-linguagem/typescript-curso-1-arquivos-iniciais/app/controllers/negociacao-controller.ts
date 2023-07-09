import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true)
    private mensagensView = new MensagemView('#mensagemView', false)

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data'); // garanti que o retorno é um objeto do tipo "HTMLInputElement"
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    // zezinho doidera doido
    public adiciona() : void{
        const negociacao = this.criaNegociacao();

        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagensView.update("apenas negociações em dias uteis são aceitas")
            return;
        }

        this.negociacoes.adicionaNegociacao(negociacao);
        this.mensagensView.update("Negociação cadastrada com sucesso");                
        this.atualizaView();
        this.limparFormulario();
    }

    private criaNegociacao() : Negociacao {
        this.atualizaView();
        return Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();

    }


    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    
}