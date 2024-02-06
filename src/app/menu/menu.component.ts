import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  pages = [
    {title: 'Cuentas', path: 'pages/cuenta'},
    {title: 'Recargas', path: 'pages/recarga'}
  ]
}
