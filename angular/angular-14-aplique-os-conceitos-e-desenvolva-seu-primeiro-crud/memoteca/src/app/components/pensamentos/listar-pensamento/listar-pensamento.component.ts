import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor() { }

  listaPensamentos = [
    {
      conteudo: "O naruto pode ser duro as vezes",
      autoria: "Cabel",
      modelo: "modelo3"
    },
    {
      conteudo: "Cabeuludinho está sinistro recentemente",
      autoria: "Cabel2",
      modelo: "modelo2"
    },
    {
      conteudo: "LMussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Quem manda na minha terra sou euzis!Mé faiz elementum girarzis, nisi eros vermeio.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.uquinha2",
      autoria: "Cabel2",
      modelo: "modelo2"
    }
  ];

  ngOnInit(): void {
  }

}
