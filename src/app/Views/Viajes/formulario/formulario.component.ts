import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Observer } from 'rxjs';
import Ciudad from 'src/app/Models/Ciudad';
import Output from 'src/app/Models/Output';
import Pagination from 'src/app/Models/Pagination';
import Pais from 'src/app/Models/Pais';
import { PaisesService } from 'src/app/Services/paises.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioView implements OnInit {

  public Paises : Pagination<Pais[]> = {data : []} as Pagination<Pais[]>;
  public CiudadesOrigen : Ciudad[] = [];
  public CiudadesDestino : Ciudad[] = [];

  private loadData: Observer<Output<Pagination<Pais[]>>> = {
    next: output => {
      this.Paises = output.data;
    },
    error: output => {
      
    },
    complete: () => {}
  }

  private loadCiudadOrigen: Observer<Ciudad[]> = {
    next: output => {
      this.CiudadesOrigen = output;
    },
    error: output => {
      
    },
    complete: () => {}
  }

  private loadCiudadDestino: Observer<Ciudad[]> = {
    next: output => {
      this.CiudadesDestino= output;
    },
    error: output => {
      
    },
    complete: () => {}
  }

  constructor(private _bottomSheetRef: MatBottomSheetRef<FormularioView>, private paisesService: PaisesService) {
    
  }

  cambiarOrigen(v){
    v.value
  }

  cambiarDestino(v){
    v.value
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.paisesService.loadPaisesList().subscribe(this.loadData);
  }

}
