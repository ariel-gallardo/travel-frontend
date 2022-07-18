import { Component, OnInit } from '@angular/core';
import { TiposVehiculoService, VehiculosService } from '@Services';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class VehiculosView implements OnInit {

  constructor(public vehiculosService : VehiculosService, public tiposVehiculoService : TiposVehiculoService) { }

  public displayedColumns : string[] = [
    "tipoVehiculo",
    "patente",
    "marca",
    "modelo",
    "color",
    "ocupado",
    "acciones"
  ]

  public columnsTipoVehiculo : string[] = [ "denominacion", "acciones"]

  public agregarVehiculo(){}
  public agregarTipoVehiculo(){}
  public modifyVehiculo(id){}
  public modifyTipoVehiculo(id){}
  public deleteVehiculo(id){}
  public deleteTipoVehiculo(id){}


  ngOnInit(): void {
    this.vehiculosService.loadDataList();
    this.tiposVehiculoService.loadDataList();
  }

}
