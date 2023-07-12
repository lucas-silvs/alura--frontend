import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInjector("#data")
    private inputData: HTMLInputElement;
    
    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement;

    @domInjector("#valor")
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagensView = new MensagemView('#mensagemView')
    private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @logarTempoDeExecucao()
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

    public importaDados(): void {
        this.negociacoesService.obterNegociacoes()
            .then(negociacaoDeHoje => {
               return negociacaoDeHoje.filter(negociacaoDeHoje => {
                return !this.negociacoes
                .listaNegociacoes()
                .some(negociacao => negociacao.ehIgual(negociacaoDeHoje))
               }) 
            })
            .then(negociacoesDeHoje => {
            negociacoesDeHoje.forEach(negociacao => {

                this.negociacoes.adicionaNegociacao(negociacao)
            })
        })

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