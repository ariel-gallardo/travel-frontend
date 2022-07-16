import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Pais} from '@Models';
import { BaseService } from './baseService';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesService extends BaseService<Pais> {

  constructor(http: HttpClient,messageService: MessageService){
    super(http,messageService)
  }
}
 