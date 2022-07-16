import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViajesService } from 'src/app/Services/viajes.service';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { FormularioView } from '../Viajes/formulario/formulario.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableView implements OnInit, OnDestroy {

  displayedColumns = ['paisOrigen', 'paisDestino', 'ciudadOrigen', 'ciudadDestino', 'fechaInicio', 'fechaFin', 'vehiculoAsignado']
  
  constructor(public viajesServices : ViajesService, private _bottomSheet: MatBottomSheet) {

  }

  programarViaje(): void {
    this._bottomSheet.open(FormularioView);
  }

  ngOnInit(): void {
    this.viajesServices.loadDataList();
  }

  ngOnDestroy(): void{
    
  }
}
