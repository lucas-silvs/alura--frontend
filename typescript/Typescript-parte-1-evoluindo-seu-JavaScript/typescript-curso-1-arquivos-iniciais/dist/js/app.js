import { Negociacao } from "./models/negociacao.js";


const negociacao = new Negociacao(new Date(), 1200, 100);

console.log(`Negociação antes da alterção: ${negociacao}`);

negociacao.quantidade = 10000;

console.log(`Negociação depois da alterção: ${negociacao.quantidade()}`);
