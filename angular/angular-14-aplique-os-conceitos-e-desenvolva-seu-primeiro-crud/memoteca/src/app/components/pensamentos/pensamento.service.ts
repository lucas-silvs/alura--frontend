import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento-interface';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) { }

  listarPensamentos(): Observable<Pensamento[]> {
    return this.httpClient.get<Pensamento[]>(this.API)
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
