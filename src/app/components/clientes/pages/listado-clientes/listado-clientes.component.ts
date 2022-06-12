import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Clientes } from '../../models/cliente-model';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {
  dataClientes:Clientes[] =[];
  subscription:Subscription = new Subscription();
  fechaDefuncion:string = '';
  constructor(private _clienteService: ClientesService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.setView();
  }

  setView(){
    this._clienteService.setListadoClientes()
    this.getClientes()
  }

  getClientes(){
    this.subscription.add(
      this._clienteService.dataClientes$.subscribe((data)=>{
        this.dataClientes = data;
      })
    );
    if(this.dataClientes.length > 0)this.calculaPosibleFechaDefuncion();
  }

  calculaPosibleFechaDefuncion(){
    let promedioVida:number = 90;
    let diferenciaPromedioVida:number[] = [];
    let fechaHoy:Date = new Date();
    diferenciaPromedioVida = this.dataClientes.map((element)=>{
     return ( promedioVida - element.edad);
    });
   // this.fechaDefuncion = this.datePipe.transform((fechaHoy, 'MMM d, y'))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
