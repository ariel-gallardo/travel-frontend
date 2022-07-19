import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormCiudades } from '@Models';
import { CiudadesService, PaisesService } from '@Services';

@Component({
  selector: 'formulario-ciudades',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioCiudades implements OnInit {

  constructor(public paisesService : PaisesService,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<FormularioCiudades>,
      public ciudadesService : CiudadesService
  ) { }

  public id: number = 0
  public paisId: string = '0'
  public nombre: string = ''

  enviarDatos(){
    if(this.id > 0){
      this.ciudadesService.modifyData({
        id: Number(this.id),
        nombre: this.nombre,
        paisId: Number(this.paisId)
      } as FormCiudades)
    }else{
      this.ciudadesService.createData({
        nombre: this.nombre,
        paisId: Number(this.paisId)
      } as FormCiudades)
    }
    this.dialogRef.close()
  }

  cargarDatos(){
    if(this.data){
      this.ciudadesService.loadData(this.data)
      this.ciudadesService.dataGetOne$.subscribe(d =>{
        this.id = d.id
        this.nombre = d.nombre
        this.paisId = d.paisId.toString()
      })
    }
  }

  ngOnInit(): void {
    this.cargarDatos()
  }

}
