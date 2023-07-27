import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  constructor(
    private  pensamentoService: PensamentoService
    ) { }

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "Luquinha",
    autoria: "Cabel",
    modelo: "modelo3",
    favorito: false
  }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256){
      return "pensamento-g"
    }
    return "pensameto-p"
  }


  mudarIconeFavorito(): string {
    if(this.pensamento.favorito){
      return 'ativo'
    }
    else{
      return 'inativo'
    }
  }


  mudarStatusFavoritoPensamento() {
    this.pensamentoService.atualizarStatusFavorito(this.pensamento).subscribe();
  }
    

}
