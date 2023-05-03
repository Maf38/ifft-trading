import { Component, Input, OnInit, Output } from '@angular/core';
import { OrderSide } from 'src/models/Enum/order-side';
import { LimitOrder } from '../../models/limit-order'; 
import {PlaceOrderService } from '../../services/place-order.service'
import { Data } from 'src/models/data';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{

  @Input()  limitOrder? : LimitOrder;
  @Output() responseData?: Data;

  ngOnInit(): void {   
    this.limitOrder = new LimitOrder(); 
  }

  constructor(private placeOrderService : PlaceOrderService){

  }


placeLimitOrder(order: LimitOrder){
  this.placeOrderService
    .postPerpetualLimitOrder(order)
    .subscribe((data : Data) =>    {
      this.responseData =data
    
    }) ;    
    ;
}


}
