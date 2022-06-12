import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Clientes } from '../../models/cliente-model';

@Component({
  selector: 'app-clientes-main',
  templateUrl: './clientes-main.component.html',
  styleUrls: ['./clientes-main.component.scss']
})
export class ClientesMainComponent implements OnInit, OnDestroy {
  constructor(private _clienteService:ClientesService) { }
 
  ngOnInit(): void {
   this._clienteService.setListadoClientes()
  }


  ngOnDestroy(): void {
    this._clienteService.ngOnDestroy();
  }

}
