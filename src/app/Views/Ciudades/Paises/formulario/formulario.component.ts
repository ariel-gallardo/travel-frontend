import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormPaises } from '@Models';
import { PaisesService } from '@Services';

@Component({
  selector: 'formulario-paises',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioPaises implements OnInit {

  constructor(
      public paisesService : PaisesService,
      @Inject(MAT_DIALOG_DATA) public data: any, 
      private dialogRef: MatDialogRef<FormularioPaises>
     ) { }

  public id: number = 0
  public nombre: string

  enviarDatos(){
    if(this.id > 0){
      this.paisesService.modifyData({
        id: this.id,
        nombre: this.nombre
      } as FormPaises)
    }else{
      this.paisesService.createData({
        nombre: this.nombre
      } as FormPaises)
    }
    this.dialogRef.close()
  }

  cargarDatos(){
    if(this.data){
      this.paisesService.loadData(this.data)
      this.paisesService.dataGetOne$.subscribe(d =>{
        this.id = d.id
        this.nombre = d.nombre
      })
    }
  }

  ngOnInit(): void {
    this.cargarDatos()
  }

}
