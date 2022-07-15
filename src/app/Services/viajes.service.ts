import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import Viaje from '../Models/Viaje';
import { environment } from '../../environments/environment';
import Output from '../Models/Output';
import Pagination from '../Models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  private urlService : string = `${environment.backendUrl}/Viajes`;

  public loadViajesList(page: number = 1): Observable<Output<Pagination<Viaje[]>>>{
    return this.http.get<Output<Pagination<Viaje[]>>>(`${this.urlService}/all/${page}`);
  }

  constructor(private http: HttpClient) {

  }


}
