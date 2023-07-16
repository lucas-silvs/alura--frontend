import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private pensamentoService : PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute


  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  editarPensamento() {
    this.pensamentoService.editarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/']);
    });

  }

  cancelarPensamento() {
    this.router.navigate(['/']);
  }

}
