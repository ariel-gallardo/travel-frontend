import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Output, Pagination} from '@Models';
import { MessageService } from './message.service';
import { Inject } from '@angular/core';

export class BaseService<T> {

  public urlService : string = `${environment.backendUrl}`;

  public paginationOutput$ : BehaviorSubject<Output<Pagination<T[]>>> = new BehaviorSubject({
    data: {
      data: []
    } as Pagination<T[]>,
    messages: [],
    statusCode: 0
  });

  public dataPagination$: BehaviorSubject<Pagination<T[]>> = new BehaviorSubject({} as Pagination<T[]>);
  public dataAll$: BehaviorSubject<T[]> = new BehaviorSubject([]);
  public dataGetOne$ : BehaviorSubject<T> = new BehaviorSubject({} as T);
  public dataPost$: BehaviorSubject<Output<Boolean>> = new BehaviorSubject({} as Output<Boolean>);
  public dataPut$: BehaviorSubject<Output<Boolean>> = new BehaviorSubject({} as Output<Boolean>);
  public dataDelete$: BehaviorSubject<Output<Boolean>> = new BehaviorSubject({} as Output<Boolean>);

  public loadDataList(page: number = 1){    
    this.http.get<Output<Pagination<T[]>>>(`${this.urlService}/all/${page}`)
    .subscribe(o => {
      this.paginationOutput$.next(o)
      if(o.statusCode == 200){
        this.dataPagination$.next(o.data)
        this.dataAll$.next(o.data.data)
      }
    })
  }

  public createData(data : any){
    const formData = new FormData()
    for(const prop in data){
      formData.append(prop,data[prop])
    }
    this.http.post<Output<Boolean>>(this.urlService,formData)
    .subscribe(d => {
      this.dataPost$.next(d)
      this.messageService.open(d.messages)
    },err => this.messageService.open(err.error.messages))
  }

  public getEndpointUrl(){
    return `${this.urlService}/${this.constructor.name.replace('Service','')}`;
  }

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.urlService = this.getEndpointUrl()
  }
}
