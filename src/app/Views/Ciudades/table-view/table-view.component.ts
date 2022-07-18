import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CiudadesService, PaisesService } from '@Services';
import { FormularioCiudades } from '../formulario/formulario.component';
import { FormularioPaises } from '../Paises/formulario/formulario.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class CiudadesView implements OnInit {

  constructor(public paisesService : PaisesService, public ciudadesService: CiudadesService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.paisesService.loadDataList();
    this.ciudadesService.loadDataList();
  }


  public columnsCiudad : string[] = [
    "denominacion",
    "pais",
    "acciones"
  ]

  agregarCiudad(){this._bottomSheet.open(FormularioCiudades)} 
  deleteCiudad(id){}
  modifyCiudad(id){}
  
  agregarPais(){this._bottomSheet.open(FormularioPaises)}
  deletePais(id){}
  modifyPais(id){}

  public columnsPais : string[] = [
    "denominacion",
    "acciones"
  ]

}
