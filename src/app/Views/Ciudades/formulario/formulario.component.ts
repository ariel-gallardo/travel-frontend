import { Component, OnInit } from '@angular/core';
import { PaisesService } from '@Services';

@Component({
  selector: 'formulario-ciudades',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioCiudades implements OnInit {

  constructor(public paisesService : PaisesService) { }

  public id: string = '0'
  public paisId: string = '0'
  public nombre: string = ''

  enviarDatos(){
    
  }

  ngOnInit(): void {
  }

}
