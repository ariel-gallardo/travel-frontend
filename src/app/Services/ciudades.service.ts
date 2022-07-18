import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Ciudad} from '@Models';
import { BaseService } from './baseService';
import { MessageService } from './message.service';
 
@Injectable({
  providedIn: 'root'
})
export class CiudadesService extends BaseService<Ciudad> {

  constructor(http: HttpClient, messageService: MessageService){
    super(http,messageService)
  }

}
