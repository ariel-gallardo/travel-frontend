import { Component, OnInit } from '@angular/core';
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

  public fechaInicial : Date
  public fechaFinal : Date
  public formData = {} as FormViajeFilter

  public reiniciar(){
    this.viajesService.resetPagination()
  }

  public submitData(e: SubmitEvent){ 
    e.preventDefault()

    if(this.fechaFinal && this.fechaInicial){
      this.formData.fechaInicial = this.fechaInicial.toISOString().slice(0,10).replace('-','/').replace('-','/');
      this.formData.fechaFinal = this.fechaFinal.toISOString().slice(0,10).replace('-','/').replace('-','/');
    }
    this.formData.useFilter = (this.formData.isRango || this.formData.isTipo || this.formData.isDestino) && true;
    if(!this.formData.useFilter)
      this.formData.useFilter = false
    this.viajesService.loadDataList(this.formData)
  }

}
