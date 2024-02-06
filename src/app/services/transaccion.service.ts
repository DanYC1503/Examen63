import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../domain/cuenta/transaccion';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http: HttpClient) { }

  realizarTransaccion(transaccion: Transaccion): Observable<any> {
    let url = environment.WS_PATH + "/transaccion";
    return this.http.post<any>(url, transaccion)
  }
}
