import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  constructor() { }

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "Luquinha",
    autoria: "Cabel",
    modelo: "modelo3"
  }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256){
      return "pensamento-g"
    }
    return "pensameto-p"
  }

}
