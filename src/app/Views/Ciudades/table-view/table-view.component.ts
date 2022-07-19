import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { CiudadesService, PaisesService } from '@Services';
import { DialogService } from 'src/app/Services/dialog.service';
import { FormularioCiudades } from '../formulario/formulario.component';
import { FormularioPaises } from '../Paises/formulario/formulario.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class CiudadesView implements OnInit {

  constructor(
      public paisesService : PaisesService,
      public ciudadesService: CiudadesService, 
      public dialog: MatDialog,
      public dialogService: DialogService
     ) { }

  ngOnInit(): void {
    this.paisesService.loadDataList();
    this.ciudadesService.loadDataList();
  }


  public columnsCiudad : string[] = [
    "denominacion",
    "pais",
    "acciones"
  ]


public agregarCiudad() {
  this.dialog
    .open(FormularioCiudades)
    .afterClosed()
    .subscribe((o) => {
      this.reloadList();
    });
}
public modifyCiudad(id) {
  this.dialog
    .open(FormularioCiudades, { data: id })
    .afterClosed()
    .subscribe((o) => {
      this.reloadList();
    });
}
public deleteCiudad(id) {
  this.dialogService.openDialog(
    'Eliminar',
    'desea eliminar esta ciudad?',
    () => {
      this.ciudadesService.deleteData(id);
    },
    () => {},
    () => {
      this.reloadList();
    }
  );
}

public agregarPais() {
  this.dialog.open(FormularioPaises);
}

public modifyPais(id) {
  this.dialog
    .open(FormularioPaises, { data: id })
    .afterClosed()
    .subscribe((o) => {
      this.reloadList();
    });
}

public deletePais(id) {
  this.dialogService.openDialog(
    'Eliminar',
    'desea eliminar este pais?',
    () => {
      this.paisesService.deleteData(id);
    }
  ),
    () => {},
    () => {
      this.reloadList();
    };
}

private reloadList() {
  this.ciudadesService.loadDataList();
  this.paisesService.loadDataList();
}


  public columnsPais : string[] = [
    "denominacion",
    "acciones"
  ]

}
