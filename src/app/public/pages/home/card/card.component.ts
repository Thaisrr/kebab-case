import {Component, Input} from '@angular/core';
import {Sandwich} from "../../../../shared/models/sandwich";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() sandwich?: Sandwich;

}
