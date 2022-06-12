import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, OnDestroy } from '@angular/core';
import { Clientes } from '../models/cliente-model';
import { BehaviorSubject, Observable, Subscriber, Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ClientesService implements OnDestroy {
  dataClientes$:BehaviorSubject<Clientes[]> = new BehaviorSubject([]);
  subscription:Subscription = new Subscriber();
  dataClientes:Clientes[] = [];
  constructor(private firestore:AngularFirestore) { }

  setListadoClientes(){
    this.subscription.add(
      this.getClientes().subscribe((data)=>{
        data.map((element)=>{
          this.dataClientes.push({...element.payload.doc.data()})
        })
        this.seteaSubjectClientes(this.dataClientes)
      })
    );
  }

  insertClientes(cliente: Clientes): Promise<any>{
    return this.firestore.collection('clientes').add(cliente);
  }

  getClientes(): Observable<any>{
    return this.firestore.collection('clientes').snapshotChanges();
  }

  seteaSubjectClientes(value:Clientes[]){
    this.dataClientes$.next(value)
  }

  ngOnDestroy(): void {
    this.dataClientes$.next([]);
    this.subscription.unsubscribe();
  }
}
