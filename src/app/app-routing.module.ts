import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesMainComponent } from './components/clientes/pages/clientes-main/clientes-main.component';
import { ListadoClientesComponent } from './components/clientes/pages/listado-clientes/listado-clientes.component';

const routes: Routes = [
  {path:'', redirectTo:'creacion-cliente', pathMatch:'full' },
  {path: 'creacion-cliente', component:ClientesMainComponent},
  {path:'listado-cliente', component:ListadoClientesComponent},
  {path:'**', redirectTo:'creacion-cliente', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
