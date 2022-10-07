import {Component, OnInit} from '@angular/core';
import {Sandwich} from "../../utils/models/sandwich";
import {KebabService} from "../../utils/services/kebab.service";
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
    this.sandwiches = this.kebabService.getAll()
     // .subscribe(response => this.sandwiches = response)
  }
}
