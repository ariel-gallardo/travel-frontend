import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-tiposvehiculo',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioTiposVehiculo implements OnInit {

  constructor() { }

  public id: number = 0
  public nombre: string

  enviarDatos(){
    
  }

  ngOnInit(): void {
  }

}
