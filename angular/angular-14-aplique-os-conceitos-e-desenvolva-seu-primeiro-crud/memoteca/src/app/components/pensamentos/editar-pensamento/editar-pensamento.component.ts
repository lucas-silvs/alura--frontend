import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from '../criar-pensamento/validators/minusculoValidators';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder



  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    this.formulario = this.formBuilder.group({
      conteudo: [""],
      autoria: [""],
      modelo: [""]
    });

    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose(
          [
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/)
          ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.minLength(3),
          Validators.required,
          minusculoValidator

        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito]
      });

    })
  }

  editarPensamento() {
    this.pensamentoService.editarPensamento(this.formulario.value).subscribe(() => {
      this.router.navigate(['/']);
    });

  }

  cancelarPensamento() {
    this.router.navigate(['/']);
  }

  habilitarBotao(){
    if(this,this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
