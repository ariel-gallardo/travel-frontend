import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TiposVehiculoService, VehiculosService } from '@Services';
import { FormularioVehiculos } from '../formulario/formulario.component';
import { FormularioTiposVehiculo } from '../TiposVehiculo/formulario/formulario.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class VehiculosView implements OnInit {

  constructor(public vehiculosService : VehiculosService, public tiposVehiculoService : TiposVehiculoService, public dialog: MatDialog) { }

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

  public agregarVehiculo(){this.dialog.open(FormularioVehiculos)}
  public agregarTipoVehiculo(){this.dialog.open(FormularioTiposVehiculo)}
  public modifyVehiculo(id){this.dialog.open(FormularioVehiculos)}
  public modifyTipoVehiculo(id){this.dialog.open(FormularioTiposVehiculo)}
  public deleteVehiculo(id){}
  public deleteTipoVehiculo(id){}


  ngOnInit(): void {
    this.vehiculosService.loadDataList();
    this.tiposVehiculoService.loadDataList();
  }

}
