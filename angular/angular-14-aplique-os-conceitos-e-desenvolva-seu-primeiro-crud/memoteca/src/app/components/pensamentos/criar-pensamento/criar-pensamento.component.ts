import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './validators/minusculoValidators';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ["", Validators.compose(
        [
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
      autoria: ["", Validators.compose([
        Validators.minLength(3),
        Validators.required,
        minusculoValidator
      ])],
      modelo: ["modelo1"],
      favorito: [false]
    });
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors)
    if (this.formulario.valid) {
    
    this.pensamentoService.cadastrarPensamento(this.formulario.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  }

  cancelarPensamento(){
    this.router.navigate(['/'])
  }

  habilitarBotao(){
    if(this,this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
