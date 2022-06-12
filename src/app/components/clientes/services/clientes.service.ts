import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Clientes } from '../models/cliente-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  dataClientes$:BehaviorSubject<Clientes[]>
  constructor(private firestore:AngularFirestore) { }

  insertClientes(cliente: Clientes): Promise<any>{
    return this.firestore.collection('clientes').add(cliente);
  }

  getClientes(): Observable<any>{
    return this.firestore.collection('clientes').snapshotChanges();
  }
}
