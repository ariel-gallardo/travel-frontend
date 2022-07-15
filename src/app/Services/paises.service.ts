import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Output from '../Models/Output';
import Pagination from '../Models/Pagination';
import Pais from '../Models/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private urlService : string = `${environment.backendUrl}/Paises`;

  public loadPaisesList(page: number = 1): Observable<Output<Pagination<Pais[]>>>{
    return this.http.get<Output<Pagination<Pais[]>>>(`${this.urlService}/all/${page}`);
  }

  constructor(private http: HttpClient) { }
}
