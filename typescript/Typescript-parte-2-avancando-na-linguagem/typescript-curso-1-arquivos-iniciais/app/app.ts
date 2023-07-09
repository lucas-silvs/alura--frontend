import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";


const controller = new NegociacaoController();

const form: HTMLInputElement | null = document.querySelector('.form');

if(form){
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
})
}else{
    throw new Error("Não foi possivel iniciar a aplicação, o form está nulo");
    
}