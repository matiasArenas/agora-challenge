import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesMainComponent } from './components/clientes/pages/clientes-main/clientes-main.component';
import { FormularioSalidaComponent } from './components/clientes/pages/clientes-main/formulario-salida/formulario-salida.component';
import { FormularioEntradaComponent } from './components/clientes/pages/clientes-main/formulario-entrada/formulario-entrada.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './components/clientes/pages/listado-clientes/listado-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesMainComponent,
    FormularioSalidaComponent,
    FormularioEntradaComponent,
    NavbarComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
