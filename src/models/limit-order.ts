import { Order } from "./order";

export class LimitOrder extends Order {
  
    leverage = 10;
    price=50000;
    takeProfit =1 ;
    stopLoss=0.5;
        
}