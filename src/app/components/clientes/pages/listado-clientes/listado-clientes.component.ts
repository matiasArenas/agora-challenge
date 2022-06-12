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
  constructor(private _clienteService: ClientesService) { }

  ngOnInit(): void {
    this.setView();
  }

  setView(){
    this.getEmpleados();
  }

  getEmpleados(){
    this.subscription.add(
      this._clienteService.getClientes().subscribe((data)=>{
        data.map((element)=>{
          this.dataClientes.push({
            ...element.payload.doc.data()
          })
        })
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
