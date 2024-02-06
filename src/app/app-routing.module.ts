import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { RecargaComponent } from './pages/recarga/recarga.component';

const routes: Routes = [
  {path:"menu", component: MenuComponent},
  {path:"pages/cuenta", component: CuentasComponent},
  {path:"pages/recarga", component: RecargaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
