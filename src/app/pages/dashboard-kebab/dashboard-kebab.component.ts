import { Component, OnInit } from '@angular/core';
import {KebabService} from "../../utils/services/kebab.service";
import {Sandwich} from "../../utils/models/sandwich";

@Component({
  selector: 'app-dashboard-kebab',
  templateUrl: './dashboard-kebab.component.html',
  styleUrls: ['./dashboard-kebab.component.css']
})
export class DashboardKebabComponent implements OnInit {
  kebabs?: Sandwich[];

  constructor(private kebabService: KebabService) { }

  ngOnInit(): void {
    this.kebabs = this.kebabService.getAll();
  }

  deleteKebab(kebab: Sandwich) {
    this.kebabService.deleteOne(kebab)
  }
}
