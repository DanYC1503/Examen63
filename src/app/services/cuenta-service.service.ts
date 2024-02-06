import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from '../domain/cuenta/cuenta.component';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CuentaServiceService {

  constructor(private http: HttpClient) { }

  getCuentas(): Observable<Cuenta[]> {
    let url = environment.WS_PATH + "/cuentas/list";
    return this.http.get<Cuenta[]>(url);
  }
}
