import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { Observer } from 'rxjs';
import {Ciudad, FormViaje, Vehiculo} from '@Models';
import { PaisesService, TiposVehiculoService, ViajesService } from '@Services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioView implements OnInit, OnDestroy {

  public ePaisOrigen$: Subject<MatSelectChange> = new Subject();
  public ePaisDestino$: Subject<MatSelectChange> = new Subject();
  public eTipoVehiculo$: Subject<MatSelectChange> = new Subject();
  public ciudadesOrigen$: BehaviorSubject<Ciudad[]> = new BehaviorSubject([]);
  public ciudadesDestino$: BehaviorSubject<Ciudad[]> = new BehaviorSubject([]);
  public vehiculos$: BehaviorSubject<Vehiculo[]> = new BehaviorSubject([]);
  
  public smsVehiculos$: BehaviorSubject<string> = new BehaviorSubject("Seleccionar tipo de vehiculo");

  private subPaisOrigen: Subscription;
  private subPaisDestino: Subscription;
  private subTipoVehiculo: Subscription;
  private subSmsVehiculo: Subscription;

  public minDate : Date;
  public maxDate : Date;

  constructor(
      private _bottomSheetRef: MatBottomSheetRef<FormularioView>,
      public paisesService: PaisesService,
      public tiposVehiculoService : TiposVehiculoService,
      public viajesService : ViajesService,
    ) {
      
    this.minDate = new Date()
    this.maxDate = new Date(this.minDate.getFullYear(),this.minDate.getMonth(),this.minDate.getDate()+10)
  }


  private loadCiudadesOrigen: Observer<MatSelectChange> = {
    next: id => {
      this.paisesService.dataAll$.subscribe(paises => {
        const pais = paises.find(p => p.id == Number(id));
        this.ciudadesOrigen$.next(pais.ciudades)
      })
    },
    error: id => {},complete: () => {}
  }

  private loadCiudadesDestino: Observer<MatSelectChange> = {
    next: id => {
      this.paisesService.dataAll$.subscribe(paises => {
        const pais = paises.find(p => p.id == Number(id));
        this.ciudadesDestino$.next(pais.ciudades)
      })
    },
    error: id => {},complete: () => {}
  }

  private loadVehiculos: Observer<MatSelectChange> = {
    next: id => {
      this.tiposVehiculoService.dataAll$.subscribe(tV => {
        const tipoVehiculo = tV.find(t => t.id == Number(id));
        this.vehiculos$.next(tipoVehiculo.vehiculos.filter(v => v.itsBusy))
      })
    },
    error: id => {},complete: () => {}
  }

  private loadMensajeVehiculo: Observer<MatSelectChange> = {
    next: id => {
      if(this.vehiculos$.value.length > 0 && Number(id) > 0){
        this.smsVehiculos$.next('Seleccionar un vehiculo')
      }else if(this.vehiculos$.value.length == 0){
        this.smsVehiculos$.next('No hay vehiculos disponibles')
      }else{
        this.smsVehiculos$.next('Seleccionar tipo de vehiculo')
      }
    },
    error: id => {},complete: () => {}
  }

  @ViewChild('formCiudadOrigen') private formCiudadOrigen: ElementRef
  @ViewChild('formCiudadDestino') private formCiudadDestino: ElementRef
  @ViewChild('formVehiculo') private formVehiculo: ElementRef
  @ViewChild('formFechaInicio') private formFechaInicio: ElementRef

  public submitData(e){
    e.preventDefault()

    const formData : FormViaje = new FormViaje(
      this.formCiudadOrigen.nativeElement?.value,
      this.formCiudadDestino.nativeElement?.value,
      this.formVehiculo.nativeElement?.value,
      this.formFechaInicio.nativeElement?.value,
    )
    this.viajesService.createData(formData)
  }


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.paisesService.loadDataList();
    this.tiposVehiculoService.loadDataList();
    this.subPaisOrigen = this.ePaisOrigen$.subscribe(this.loadCiudadesOrigen);
    this.subPaisDestino = this.ePaisDestino$.subscribe(this.loadCiudadesDestino);
    this.subTipoVehiculo = this.eTipoVehiculo$.subscribe(this.loadVehiculos);
    this.subSmsVehiculo = this.eTipoVehiculo$.subscribe(this.loadMensajeVehiculo);
  }
  
  ngOnDestroy(): void{
    this.subPaisOrigen.unsubscribe()
    this.subPaisDestino.unsubscribe()
    this.subTipoVehiculo.unsubscribe()
    this.subSmsVehiculo.unsubscribe()
  }

}
