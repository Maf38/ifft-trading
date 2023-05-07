import { Component,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Order } from 'src/models/order';

export class Position {
    value = "Buy";
    viewValue = "Long";
}

@Component({
  selector: 'app-position-type',
  templateUrl: './position-type.component.html',
  styleUrls: ['./position-type.component.css']
})
export class PositionTypeComponent {
  
  
  position: Position = new Position();

  positions : Position [] = [
    {value: "Buy", viewValue: "Long"},
    {value: "Sell", viewValue: "Short"}
  ];
 
  @Output() orderSide = new EventEmitter<string>();

  public onOptionsSelected(event:any) {    
    this.orderSide.emit(event.target.value);
 }
   

}
