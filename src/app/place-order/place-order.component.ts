import { Component, Input, OnInit, Output, NgModule } from '@angular/core';
import { LimitOrder } from '../../models/limit-order'; 
import {PlaceOrderService } from '../../services/place-order.service'
import { Data } from 'src/models/data';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{

  limitOrder? : LimitOrder;
  responseData?: Data;

  ngOnInit(): void {   
    this.limitOrder = new LimitOrder();
      
  }

  constructor(private placeOrderService : PlaceOrderService){

  }


placeLimitOrder(order: LimitOrder){
  console.log (order.orderSide);
  this.placeOrderService
    .postPerpetualLimitOrder(order)
    .subscribe((data : Data) =>    {
      this.responseData =data
    console.log(data.toString());
    }) ;    
    ;
}

onPositionChanged(order: string) {
  if(this.limitOrder){
    this.limitOrder.orderSide = order;
  }
  console.log(this.limitOrder?.orderSide)
}


}
