import { ClientesService } from './../../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-entrada',
  templateUrl: './formulario-entrada.component.html',
  styleUrls: ['./formulario-entrada.component.scss']
})
export class FormularioEntradaComponent implements OnInit {
  formularioEntrada:FormGroup;
  constructor(private clientesService:ClientesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setView();
  }

  setView(){
    this.initForm();
  }

  initForm(){
    this.formularioEntrada = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido:new FormControl('', [Validators.required]),
      edad:new FormControl( [Validators.required]),
      fechaNacimiento:new FormControl( [Validators.required]),
    })
  }

}
