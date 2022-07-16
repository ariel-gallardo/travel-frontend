import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TiposVehiculo} from '@Models';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class TiposVehiculoService extends BaseService<TiposVehiculo> {
    
    constructor(http: HttpClient){
      super(http)
    } 
}
