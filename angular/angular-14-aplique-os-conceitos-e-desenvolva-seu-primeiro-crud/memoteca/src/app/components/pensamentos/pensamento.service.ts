import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pensamento } from './pensamento-interface';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) { }

  listarPensamentos(pagina:number, filtro: string): Observable<Pensamento[]> {
    let params = new HttpParams()
    .set('_page', pagina)
    .set('_limit', '2');

     if(filtro.trim().length > 2) {
        params =  params.set('q', filtro)
     }

    return this.httpClient.get<Pensamento[]>(this.API, {params})
  }

  cadastrarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.post<Pensamento>(this.API, pensamento)

  }

  excluirPensamento(pensamentoId: number): Observable<Pensamento> {
    const url = `${this.API}/${pensamentoId}`;
    return this.httpClient.delete<Pensamento>(url)
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;

    return this.httpClient.put<Pensamento>(url, pensamento)
  }

  buscarPorId(pensamentoId: number): Observable<Pensamento> {
    const url = `${this.API}/${pensamentoId}`;
    return this.httpClient.get<Pensamento>(url)
  }

  

}
