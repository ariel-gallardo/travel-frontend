import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Output from '../Models/Output';
import Pagination from '../Models/Pagination';
import Pais from '../Models/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private urlService : string = `${environment.backendUrl}/Paises`;

  private paisesOutput$ : BehaviorSubject<Output<Pagination<Pais[]>>> = new BehaviorSubject({
    data: {
      data: []
    } as Pagination<Pais[]>,
    messages: [],
    statusCode: 0
  });

  public paisesPagination$: BehaviorSubject<Pagination<Pais[]>> = new BehaviorSubject({} as Pagination<Pais[]>);
  public paises$: BehaviorSubject<Pais[]> = new BehaviorSubject([]);

  public loadPaisesList(page: number = 1){
    this.http.get<Output<Pagination<Pais[]>>>(`${this.urlService}/all/${page}`)
    .subscribe(o => {
      this.paisesOutput$.next(o)
      if(o.statusCode == 200){
        this.paisesPagination$.next(o.data)
        this.paises$.next(o.data.data)
      }
        
    })
  }

  constructor(private http: HttpClient) {
    
  }
}
