import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Vehiculo} from '@Models';
import {BaseService} from './baseService';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class VehiculosService extends BaseService<Vehiculo> {

  constructor(http: HttpClient, messageService: MessageService){ 
    super(http, messageService)
  }
  
}
