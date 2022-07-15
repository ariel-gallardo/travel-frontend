import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pais from '../Models/Pais';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class PaisesService extends BaseService<Pais> {

  constructor(http: HttpClient){
    super(http)
    this.addEndpoint('Paises')
  }

}
