import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer } from 'rxjs/internal/types';
import Output from 'src/app/Models/Output';
import Pagination from 'src/app/Models/Pagination';
import Viaje from 'src/app/Models/Viaje';
import { ViajesService } from 'src/app/Services/viajes.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormularioView } from '../Viajes/formulario/formulario.component';
import { Subscription } from 'rxjs';

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
