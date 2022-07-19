import { Component, OnInit } from '@angular/core';
import { TiposVehiculoService } from '@Services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioVehiculos implements OnInit {

  constructor(public tiposVehiculoService : TiposVehiculoService) { }

  public id: string = '0'
  public tipoVehiculoId: string = '0'
  public patente: string = ''
  public marca: string = ''
  public modelo: string = ''
  public color: string = ''
  public ocupado: Boolean = false

  enviarDatos(){
    
  }

  ngOnInit(): void {
  }

}
