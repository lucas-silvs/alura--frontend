import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor() { }

  listaPensamentos: Pensamento[] = [];

  ngOnInit(): void {
  }

}
