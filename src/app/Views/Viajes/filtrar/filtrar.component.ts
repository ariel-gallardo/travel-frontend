import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { FormViajeFilter } from '@Models';
import { ViajesService } from '@Services';

@Component({
  selector: 'viajes-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {

  constructor(public viajesService: ViajesService) { }

  ngOnInit(): void {
  }

  public selRango: Boolean = false
  public selTipo: Boolean = false
  public selDestino: Boolean = false

  public fechaInicial: string
  public fechaFinal: string
  public tipoVehiculo: string
  public destino: string

  public reiniciar(){
    this.viajesService.resetPagination()
  }

  public submitData(e: SubmitEvent){
    e.preventDefault()

    const formData = {
      FechaInicial: this.fechaInicial,
      FechaFinal: this.fechaFinal,
      TipoVehiculo: this.tipoVehiculo,
      Destino: this.destino,
      IsRango: this.selRango,
      IsTipo: this.selTipo,
      IsDestino: this.selDestino,
    } as FormViajeFilter

  }

}
