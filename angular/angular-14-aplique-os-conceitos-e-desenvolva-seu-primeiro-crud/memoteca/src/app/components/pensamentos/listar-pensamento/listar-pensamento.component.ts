import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
    ) { }

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  haMaisPensamentos: boolean = true;

  ngOnInit(): void {
    this.pensamentoService.listarPensamentos(this.paginaAtual, '',false).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listarPensamentos(++this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos)

      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    
    this.pensamentoService.listarPensamentos(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  listarPensamentosFavoritos(){
    this.titulo = 'Meus Favoritos';
    this.favoritos = !this.favoritos;
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    
    this.pensamentoService.listarPensamentos(++this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentosFavoritos) => {
      this.listaPensamentos = listaPensamentosFavoritos;
      this.listaFavoritos = listaPensamentosFavoritos;

    })
  }

  recarregarComponente(){
    // location.reload(); -- recarregar pagina

    this.favoritos = false;
    this.paginaAtual = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url])
    
  }



}
