import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.pensamentoService.cadastrarPensamento(this.pensamento).subscribe(() => {
    });
  }

  cancelarPensamento(){
    this.router.navigate(['/'])
  }

}
