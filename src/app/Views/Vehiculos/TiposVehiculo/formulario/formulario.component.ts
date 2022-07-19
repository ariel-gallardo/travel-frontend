import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormTiposVehiculo } from '@Models';
import { TiposVehiculoService } from '@Services';

@Component({
  selector: 'formulario-tiposvehiculo',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioTiposVehiculo implements OnInit {

  constructor(public tiposVehiculoService : TiposVehiculoService ,@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<FormularioTiposVehiculo>) { }

  public id: number = 0
  public nombre: string

  enviarDatos(){
    if(this.id > 0){
      this.tiposVehiculoService.modifyData({
        id: this.id,
        denominacion: this.nombre
      } as FormTiposVehiculo)
    }else{
      this.tiposVehiculoService.createData({
        denominacion: this.nombre
      } as FormTiposVehiculo)
    }
    this.dialogRef.close()
  }

  cargarDatos(){
    if(this.data){
      this.tiposVehiculoService.loadData(this.data)
      this.tiposVehiculoService.dataGetOne$.subscribe(d =>{
        this.id = d.id
        this.nombre = d.denominacion
      })
    }
  }

  ngOnInit(): void {
    this.cargarDatos()
  }

}
