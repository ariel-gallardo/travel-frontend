import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Vehiculo} from '@Models';
import {BaseService} from './baseService';

@Injectable({
  providedIn: 'root'
})

export class VehiculosService extends BaseService<Vehiculo> {

  constructor(http: HttpClient){ 
    super(http)
  }
  
}
