import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
let listaNegociacao = [];
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
