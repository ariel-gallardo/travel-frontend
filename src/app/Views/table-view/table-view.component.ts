import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ViajesService } from 'src/app/Services/viajes.service';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { FormularioView } from '../Viajes/formulario/formulario.component';
import { MatIcon } from '@angular/material/icon';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableView implements OnInit, OnDestroy {

  displayedColumns = ['paisOrigen', 'paisDestino', 'ciudadOrigen', 'ciudadDestino', 'fechaInicio', 'fechaFin', 'vehiculoAsignado', 'acciones']
  
  constructor(public viajesServices : ViajesService, private _bottomSheet: MatBottomSheet , private dialogService : DialogService) {

  }

  programarViaje(): void {
    this._bottomSheet.open(FormularioView);
  }

  reprogramViaje(vId){
    this.dialogService.openDialog('Reprogramar el viaje','Esta seguro?')
  }

  deleteViaje(vId){
    this.dialogService.openDialog('Eliminar','Esta seguro?',() => {this.viajesServices.deleteData(vId)});
  }

  ngOnInit(): void {
    this.viajesServices.loadDataList();
  }

  ngOnDestroy(): void{
    
  }
}
