import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormVehiculo } from '@Models';
import { TiposVehiculoService, VehiculosService } from '@Services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioVehiculos implements OnInit {

  constructor(
      public vehiculoService : VehiculosService, 
      @Inject(MAT_DIALOG_DATA) public data: any, 
      private dialogRef: MatDialogRef<FormularioVehiculos>, 
      public tiposVehiculoService : TiposVehiculoService
    ) { }

  public id: string = '0'
  public tipoVehiculoId: string = '0'
  public patente: string = ''
  public marca: string = ''
  public modelo: string = ''
  public color: string = ''
  public ocupado: Boolean = false

  enviarDatos(){
    if(this.id != '0'){
      this.vehiculoService.modifyData({
        id: Number(this.id),
        tipoVehiculoId: Number(this.tipoVehiculoId),
        patente:this.patente,
        marca:this.marca,
        modelo:this.modelo,
        color:this.color,
        itsBusy:this.ocupado
      } as FormVehiculo)
    }else{
      this.vehiculoService.createData({
        tipoVehiculoId: Number(this.tipoVehiculoId),
        patente:this.patente,
        marca:this.marca,
        modelo:this.modelo,
        color:this.color,
        itsBusy:this.ocupado
      } as FormVehiculo)
    }
    this.dialogRef.close()
  }

  cargarDatos(){
    if(this.data){
      this.vehiculoService.loadData(this.data)
      this.vehiculoService.dataGetOne$.subscribe(d =>{
        this.id = d.id.toString();
        this.tipoVehiculoId = d.tipoVehiculoId.toString();
        this.patente = d.patente;
        this.marca = d.marca;
        this.modelo = d.modelo;
        this.color = d.color;
        this.ocupado = d.itsBusy;
      })
    }
  }

  ngOnInit(): void {
    this.tiposVehiculoService.loadDataList()
    this.cargarDatos()
  }

}
