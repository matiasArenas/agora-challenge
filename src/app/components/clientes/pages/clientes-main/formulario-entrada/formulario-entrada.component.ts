import { ClientesService } from './../../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Clientes } from '../../../models/cliente-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-entrada',
  templateUrl: './formulario-entrada.component.html',
  styleUrls: ['./formulario-entrada.component.scss'],
})
export class FormularioEntradaComponent implements OnInit {
  formularioEntrada: FormGroup;
  cargaSpinner:boolean = false;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private _clienteService: ClientesService
  ) {}

  ngOnInit(): void {
    this.setView();
  }

  setView() {
    this.initForm();
  }

  initForm() {
    this.formularioEntrada = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl(null, [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
    });
  }

  cleanForm() {
    this.formularioEntrada.get('nombre').patchValue('');
    this.formularioEntrada.get('apellido').patchValue('');
    this.formularioEntrada.get('edad').patchValue(null);
    this.formularioEntrada.get('fechaNacimiento').patchValue('');
  }

  saveClientes() {
    this.cargaSpinner = true;
    let objAlta: Clientes = {
      nombre: this.formularioEntrada.controls['nombre'].value,
      apellido: this.formularioEntrada.controls['apellido'].value,
      edad: parseInt(this.formularioEntrada.controls['edad'].value),
      fechaNacimiento: this.formularioEntrada.controls['fechaNacimiento'].value,
    };
    this._clienteService
      .insertClientes(objAlta)
      .then(() => {
        this.showSucces();
        this.cleanForm();
        this._clienteService.setListadoClientes();
        this.cargaSpinner = false;
      })
      .catch((error) => {
        alert('Ha ocurrido un error');
        console.log(error);
        this.cargaSpinner = false;
      });
  }

  showSucces(){
    this.toastr.success('Acceda al listado para ver el registro', 'Cliente cargado con exito');
  }
}
