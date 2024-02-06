import { Component } from '@angular/core';
import { Cuenta } from 'src/app/domain/cuenta/cuenta.component';
import { CuentaServiceService } from 'src/app/services/cuenta-service.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent {
  cuenta: Cuenta = new Cuenta();
  cuentas: any;

  constructor(private cuentaService: CuentaServiceService) { 
    console.log(cuentaService.getCuentas());
  }

  ngOnInit() {
    this.cuentas = this.cuentaService.getCuentas();
    
  }
}
