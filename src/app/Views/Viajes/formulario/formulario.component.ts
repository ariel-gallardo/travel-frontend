import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs';
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
export class FormularioView implements OnInit, OnDestroy {

  public ePaisOrigen$: Subject<MatSelectChange> = new Subject();
  public ePaisDestino$: Subject<MatSelectChange> = new Subject();
  public ciudadesOrigen$: BehaviorSubject<Ciudad[]> = new BehaviorSubject([]);
  public ciudadesDestino$: BehaviorSubject<Ciudad[]> = new BehaviorSubject([]);

  private subPaises: Subscription
  private subPaisOrigen: Subscription
  private subPaisDestino: Subscription

  constructor(private _bottomSheetRef: MatBottomSheetRef<FormularioView>, public paisesService: PaisesService) {
    
  }


  private loadCiudadesOrigen: Observer<MatSelectChange> = {
    next: id => {
      this.paisesService.paises$.subscribe(paises => {
        const pais = paises.find(p => p.id == Number(id));
        this.ciudadesOrigen$.next(pais.ciudades)
      })
    },
    error: id => {},complete: () => {}
  }

  private loadCiudadesDestino: Observer<MatSelectChange> = {
    next: id => {
      this.paisesService.paises$.subscribe(paises => {
        const pais = paises.find(p => p.id == Number(id));
        this.ciudadesDestino$.next(pais.ciudades)
      })
    },
    error: id => {},complete: () => {}
  }


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.paisesService.loadPaisesList();
    this.subPaisOrigen = this.ePaisOrigen$.subscribe(this.loadCiudadesOrigen);
    this.subPaisDestino = this.ePaisDestino$.subscribe(this.loadCiudadesDestino);
  }
  
  ngOnDestroy(): void{
    this.subPaises.unsubscribe()
    this.subPaisOrigen.unsubscribe()
    this.subPaisDestino.unsubscribe()
  }

}
