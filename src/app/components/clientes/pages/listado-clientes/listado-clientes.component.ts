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
    this.getClientes();
  }

  getClientes(){
    this.subscription.add(
      this._clienteService.dataClientes$.subscribe((data)=>{
        this.dataClientes = data;
      })
    )
  }

  seteaSubjectClientes(clientes:Clientes[]){
    this._clienteService.seteaSubjectClientes(clientes);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
