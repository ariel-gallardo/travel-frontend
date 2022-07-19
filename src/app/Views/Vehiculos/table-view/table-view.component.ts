import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TiposVehiculoService, VehiculosService } from '@Services';
import { DialogService } from 'src/app/Services/dialog.service';
import { FormularioVehiculos } from '../formulario/formulario.component';
import { FormularioTiposVehiculo } from '../TiposVehiculo/formulario/formulario.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class VehiculosView implements OnInit {
  constructor(
    public vehiculosService: VehiculosService,
    public tiposVehiculoService: TiposVehiculoService,
    public dialog: MatDialog,
    public dialogService: DialogService
  ) {}

  public displayedColumns: string[] = [
    'tipoVehiculo',
    'patente',
    'marca',
    'modelo',
    'color',
    'ocupado',
    'acciones',
  ];

  public columnsTipoVehiculo: string[] = ['denominacion', 'acciones'];

  public agregarVehiculo() {
    this.dialog
      .open(FormularioVehiculos)
      .afterClosed()
      .subscribe((o) => {
        this.reloadList();
      });
  }
  public modifyVehiculo(id) {
    this.dialog
      .open(FormularioVehiculos, { data: id })
      .afterClosed()
      .subscribe((o) => {
        this.reloadList();
      });
  }
  public deleteVehiculo(id) {
    this.dialogService.openDialog(
      'Eliminar',
      'desea eliminar este vehiculo?',
      () => {
        this.vehiculosService.deleteData(id);
      },
      () => {},
      () => {
        this.reloadList();
      }
    );
  }

  public agregarTipoVehiculo() {
    this.dialog.open(FormularioTiposVehiculo);
  }

  public modifyTipoVehiculo(id) {
    this.dialog
      .open(FormularioTiposVehiculo, { data: id })
      .afterClosed()
      .subscribe((o) => {
        this.reloadList();
      });
  }
  
  public deleteTipoVehiculo(id) {
    this.dialogService.openDialog(
      'Eliminar',
      'desea eliminar este tipo de vehiculo?',
      () => {
        this.tiposVehiculoService.deleteData(id);
      }
    ),
      () => {},
      () => {
        this.reloadList();
      };
  }

  private reloadList() {
    this.vehiculosService.loadDataList();
    this.tiposVehiculoService.loadDataList();
  }

  ngOnInit(): void {
    this.reloadList();
  }
}
