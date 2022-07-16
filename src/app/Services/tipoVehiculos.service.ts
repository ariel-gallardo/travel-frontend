import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TipoVehiculo} from '@Models';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculosService extends BaseService<TipoVehiculo> {
    
    constructor(http: HttpClient){
      super(http)
    }
}
