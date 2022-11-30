import {Component, OnInit} from '@angular/core';
import {Sandwich} from "../../../shared/models/sandwich";
import {KebabService} from "../../services/kebab.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    sandwiches?: Observable<Sandwich[]>;

    constructor(private kebabService: KebabService) {}

  ngOnInit() {
    this.sandwiches = this.kebabService.getAllVisible()
     // .subscribe(response => this.sandwiches = response)
  }
}
