import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';
import { LimitOrder } from '../models/limit-order';
import { Data } from '../models/data';





@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

private url="Order";

  constructor(private http: HttpClient) { 
  }

public postPerpetualLimitOrder(order : LimitOrder) : Observable<Data>{

    var response = this.http.post<Data>(`${environment.apiUrl}/${this.url}`,order);
    //response.subscribe(data => console.log(data.error));
    return response;
    

}



}
