import { Component } from '@angular/core';
import { Transaccion } from 'src/app/domain/cuenta/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent {
  transaccion: Transaccion = new Transaccion();
  selectedCuenta1: string = '';
  monto: number = 0;
  operadoras: string[] = ["Movistar", "Claro", "CNT", "Tuenti"];

  constructor(private transaccionServ: TransaccionService) { 
    
  }

  realizarTransaccion() {
    if (this.monto <= 0) {
      alert('Ponga un valor mayor a 0');
      return;
    } else {
      // Continuar con la lógica de tu transacción aquí
      console.log('Realizando transacción...');
      this.transaccionServ.realizarTransaccion(this.transaccion).subscribe(response => {
        console.log(response);
        // Maneja la respuesta según sea necesario
        alert('Transacción completada');
      });
    }
  }
}
