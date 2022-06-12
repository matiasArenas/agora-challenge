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
  subscription:Subscription = new Subscription();
  dataClientes:Clientes[] = [];
  constructor(private _clienteService:ClientesService) { }
 
  ngOnInit(): void {
   // this.getClientes();
  }

  // getClientes(){
  //   this.subscription.add(
  //     this._clienteService.getClientes().subscribe((data)=>{
  //       data.map((element)=>{
  //         this.dataClientes.push({
  //           ...element.payload.doc.data()
  //         })
  //       })
  //       this.seteaSubjectClientes(this.dataClientes)
  //     })
  //   );
  // }

  // seteaSubjectClientes(clientes:Clientes[]){
  //   this._clienteService.seteaSubjectClientes(clientes);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

}
