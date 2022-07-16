import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Viaje} from '@Models';
import { BaseService } from './baseService';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ViajesService extends BaseService<Viaje> {

  constructor(http: HttpClient, messageService: MessageService){
    super(http,messageService)
  }

}
