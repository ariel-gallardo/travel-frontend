import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Viaje} from '@Models';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class ViajesService extends BaseService<Viaje> {

  constructor(http: HttpClient){
    super(http)
    this.addEndpoint('Viajes')
  }

}
