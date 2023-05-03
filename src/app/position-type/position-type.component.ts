import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { OrderSide } from 'src/models/Enum/order-side';

class Position {
    value: OrderSide =OrderSide.Buy;
    viewValue: string = "Long";
}

@Component({
  selector: 'app-position-type',
  templateUrl: './position-type.component.html',
  styleUrls: ['./position-type.component.css']
})
export class PositionTypeComponent {
  
  
  currentPosition: Position = new Position();

  positions : Position [] = [
    {value: OrderSide.Buy, viewValue: "Long"},
    {value: OrderSide.Sell, viewValue: "Short"}
  ];
 

  public onOptionsSelected(event:any) {
    const value = event.target.value;
    console.log(value);
    this.currentPosition = this.positions[value];
    console.log(this.currentPosition.viewValue);
    console.log(this.currentPosition.value);
 }
   

}
