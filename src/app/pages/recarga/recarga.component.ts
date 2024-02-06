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
  selectedOperadora1: string = '';
  monto: number = 0;
  operadoras: string[] = ["Movistar", "Claro", "CNT", "Tuenti"];

  constructor(private transaccionServ: TransaccionService) { 
    
  }

  realizarTransaccion() {
    this.transaccion.monto = this.monto;
    if (this.transaccion.monto <= 0) {
      alert('Ponga un valor mayor a 0');
      return;
    }else if(this.transaccion.numTelefono1 && this.transaccion.numTelefono1.length !== 10){
      alert('Numero Telefonico de longitud irregular');
      return;
    } 
    
    else {
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
