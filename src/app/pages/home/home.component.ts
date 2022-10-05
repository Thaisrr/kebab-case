import {Component, OnInit} from '@angular/core';
import {Sandwich} from "../../utils/models/sandwich";
import {KebabService} from "../../utils/services/kebab.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    sandwiches?: Sandwich[];

    constructor(private kebabService: KebabService) {}

  ngOnInit() {
    this.kebabService.getAll().subscribe(
      response => this.sandwiches = response
    )
  }
}
