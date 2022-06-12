import { ClientesService } from './../../clientes/services/clientes.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _clientesService:ClientesService) { }

  ngOnInit(): void {
  }

}
