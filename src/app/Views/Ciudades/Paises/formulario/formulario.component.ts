import { Component, OnInit } from '@angular/core';
import { PaisesService } from '@Services';

@Component({
  selector: 'formulario-paises',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioPaises implements OnInit {

  constructor(public paisesService : PaisesService) { }

  public id: number = 0
  public nombre: string

  enviarDatos(){
    
  }

  ngOnInit(): void {
  }

}
