import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: "2",
    conteudo: "Aprendendo Angular",
    autoria: "DEV",
    modelo: "modelo1"
  };

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("cadastrando meu nobrer")
  }

  cancelarPensamento(){
    alert("Cancelando cadastro de pensamento")
  }

}
