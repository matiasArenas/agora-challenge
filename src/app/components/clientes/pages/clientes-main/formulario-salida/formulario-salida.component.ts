import { ClientesService } from './../../../services/clientes.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Clientes } from '../../../models/cliente-model';

@Component({
  selector: 'app-formulario-salida',
  templateUrl: './formulario-salida.component.html',
  styleUrls: ['./formulario-salida.component.scss']
})
export class FormularioSalidaComponent implements OnInit, OnDestroy {
  subscription:Subscription = new Subscription();
  promedioEdad:number = 0;
  desvioStandard:number = 0;
  clientes:Clientes[] = [];
  cargaLista:boolean = false;
  constructor(private _clienteService:ClientesService) { }

  ngOnInit(): void {
    this.setView();
  }

  setView(){
    this.getPromedioEdad();
  }

  getPromedioEdad(){
    let sumaEdad:number = 0;
    this.subscription.add(
      this._clienteService.dataClientes$.subscribe((data)=>{
        data.map((element=>{
          this.clientes.push(element);
          sumaEdad = sumaEdad + element.edad;
        }));
       this.calculaPromedio(sumaEdad)
       this.calculaDesvio(this.promedioEdad, this.clientes)
      })
    );
  }

  calculaPromedio(sumaEdad:number){
    this.promedioEdad = Math.round(sumaEdad / this.clientes.length);
    if(this.promedioEdad > 0){
      this.cargaLista = true
    }
  }

  calculaDesvio(promedioEdad:number, clientes:Clientes[]){
    let asignoValores = clientes.map((x)=>{
      return (x.edad - promedioEdad) ** 2;
    });
    let sum = asignoValores.reduce((acc, curr)=>acc + curr, 0);
    let varianza = sum/clientes.length;
    this.desvioStandard = Math.sqrt(varianza);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
