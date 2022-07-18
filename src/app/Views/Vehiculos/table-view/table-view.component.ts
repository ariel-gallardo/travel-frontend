import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TiposVehiculoService, VehiculosService } from '@Services';
import { FormularioVehiculos } from '../formulario/formulario.component';
import { FormularioTiposVehiculo } from '../TiposVehiculo/formulario/formulario.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class VehiculosView implements OnInit {

  constructor(public vehiculosService : VehiculosService, public tiposVehiculoService : TiposVehiculoService, private _bottomSheet: MatBottomSheet) { }

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

  public agregarVehiculo(){this._bottomSheet.open(FormularioVehiculos)}
  public agregarTipoVehiculo(){this._bottomSheet.open(FormularioTiposVehiculo)}
  public modifyVehiculo(id){}
  public modifyTipoVehiculo(id){}
  public deleteVehiculo(id){}
  public deleteTipoVehiculo(id){}


  ngOnInit(): void {
    this.vehiculosService.loadDataList();
    this.tiposVehiculoService.loadDataList();
  }

}
