import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {KebabService} from "../../utils/services/kebab.service";
import {Sandwich} from "../../utils/models/sandwich";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  id?: number;
  sandwich?: Sandwich;

  constructor(private route: ActivatedRoute, private kebabService: KebabService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.loadSandwich()
  }

  loadSandwich() {
    if(this.id) {
      this.kebabService.getById(this.id)
        .subscribe(response => this.sandwich = response )
    }
  }

}
