import { Component, OnInit } from '@angular/core';
import { CiudadesService, PaisesService } from '@Services';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class CiudadesView implements OnInit {

  constructor(public paisesService : PaisesService, public ciudadesService: CiudadesService) { }

  ngOnInit(): void {
    this.paisesService.loadDataList();
    this.ciudadesService.loadDataList();
  }


  public columnsCiudad : string[] = [
    "denominacion",
    "pais",
    "acciones"
  ]

  agregarCiudad(){} 
  deleteCiudad(id){}
  modifyCiudad(id){}
  
  agregarPais(){}
  deletePais(id){}
  modifyPais(id){}

  public columnsPais : string[] = [
    "denominacion",
    "acciones"
  ]

}
