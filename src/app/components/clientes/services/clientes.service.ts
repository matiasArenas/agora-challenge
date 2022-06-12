import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Clientes } from '../models/cliente-model';
import { BehaviorSubject, Observable, Subscriber, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
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
      })
    );
    this.seteaSubjectClientes(this.dataClientes)
  }

  insertClientes(cliente: Clientes): Promise<any>{
    return this.firestore.collection('clientes').add(cliente);
  }

  getClientes(): Observable<any>{
    return this.firestore.collection('clientes').snapshotChanges();
  }

  seteaSubjectClientes(value:Clientes[]){ console.log('value', value)
    this.dataClientes$.next(value)
  }
}
