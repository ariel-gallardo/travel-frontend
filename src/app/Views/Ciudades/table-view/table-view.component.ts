import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { CiudadesService, PaisesService } from '@Services';
import { FormularioCiudades } from '../formulario/formulario.component';
import { FormularioPaises } from '../Paises/formulario/formulario.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class CiudadesView implements OnInit {

  constructor(public paisesService : PaisesService, public ciudadesService: CiudadesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.paisesService.loadDataList();
    this.ciudadesService.loadDataList();
  }


  public columnsCiudad : string[] = [
    "denominacion",
    "pais",
    "acciones"
  ]

  agregarCiudad(){this.dialog.open(FormularioCiudades)} 
  deleteCiudad(id){}
  modifyCiudad(id){this.dialog.open(FormularioCiudades)}
  
  agregarPais(){this.dialog.open(FormularioPaises)}
  deletePais(id){}
  modifyPais(id){this.dialog.open(FormularioPaises)}

  public columnsPais : string[] = [
    "denominacion",
    "acciones"
  ]

}
