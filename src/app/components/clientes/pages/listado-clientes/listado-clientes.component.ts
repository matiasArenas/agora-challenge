import { DatePipe } from '@angular/common';
import { toTypeScript } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
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
  fechaDefuncion:string[] = [];
  constructor(private _clienteService: ClientesService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.setView();
  }

  setView(){
    this.getClientes()
  }

  getClientes(){
    this.subscription.add(
      this._clienteService.getClientes().subscribe((data)=>{
        data.map((element)=>{
          this.dataClientes.push({...element.payload.doc.data()})
        })
        this.calculaPosibleFechaDefuncion();
      })
    );
  }

  calculaPosibleFechaDefuncion(){
    let promedioVida:number = 90;
    let diferenciaPromedioVida:number[] = [];
    let fechaHoy:Date = new Date;
    diferenciaPromedioVida = this.dataClientes.map((element)=>{
     return ( promedioVida - element.edad);
    });
    diferenciaPromedioVida.map((p, i)=>{
      this.fechaDefuncion[i] = this.datePipe.transform(moment(fechaHoy, 'DD/MM/YYYY').add(diferenciaPromedioVida[i], 'years').format('DD/MM/YYYY'));
      console.log(this.fechaDefuncion[i])
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
