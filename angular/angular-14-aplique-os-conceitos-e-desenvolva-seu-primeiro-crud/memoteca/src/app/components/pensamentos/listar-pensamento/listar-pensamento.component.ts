import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor(private pensamentoService: PensamentoService) { }

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  filtro: string = '';

  haMaisPensamentos: boolean = true;

  ngOnInit(): void {
    this.pensamentoService.listarPensamentos(this.paginaAtual, '').subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listarPensamentos(++this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos)

      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    
    this.pensamentoService.listarPensamentos(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }


}
