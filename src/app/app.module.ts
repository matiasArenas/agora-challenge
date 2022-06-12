//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
//componentes
import { AppComponent } from './app.component';
import { ClientesMainComponent } from './components/clientes/pages/clientes-main/clientes-main.component';
import { FormularioSalidaComponent } from './components/clientes/pages/clientes-main/formulario-salida/formulario-salida.component';
import { FormularioEntradaComponent } from './components/clientes/pages/clientes-main/formulario-entrada/formulario-entrada.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListadoClientesComponent } from './components/clientes/pages/listado-clientes/listado-clientes.component';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
