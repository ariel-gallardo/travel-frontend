import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Output from '../Models/Output';
import Pagination from '../Models/Pagination';

export class BaseService<T> {

  private urlService : string = `${environment.backendUrl}`;

  private dataOutput$ : BehaviorSubject<Output<Pagination<T[]>>> = new BehaviorSubject({
    data: {
      data: []
    } as Pagination<T[]>,
    messages: [],
    statusCode: 0
  });

  public dataPagination$: BehaviorSubject<Pagination<T[]>> = new BehaviorSubject({} as Pagination<T[]>);
  public data$: BehaviorSubject<T[]> = new BehaviorSubject([]);

  public loadDataList(page: number = 1){
    this.http.get<Output<Pagination<T[]>>>(`${this.urlService}/all/${page}`)
    .subscribe(o => {
      this.dataOutput$.next(o)
      if(o.statusCode == 200){
        this.dataPagination$.next(o.data)
        this.data$.next(o.data.data)
      }
        
    })
  }

  public addEndpoint(endpoint : string){
    this.urlService = `${this.urlService}/${endpoint}`;
  }

  constructor(private http: HttpClient) {
    
  }
}
