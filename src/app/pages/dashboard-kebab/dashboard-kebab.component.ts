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
  open_dialog = false;
  kebab_to_delete: Sandwich | undefined;

  constructor(private kebabService: KebabService) { }

  ngOnInit(): void {
    this.kebabService.getAll().subscribe(res => this.kebabs = res);
  }

  deleteKebab(is_deleted: boolean) {
    this.open_dialog = true;
    if(this.kebab_to_delete && is_deleted) {
      this.kebabService.deleteOne(this.kebab_to_delete);
      this.toggle();
    } else if (!is_deleted) {
      this.toggle()
    }

  }

  toggle(delete_obj?: Sandwich) {
    this.kebab_to_delete = delete_obj;
    this.open_dialog = !this.open_dialog;
  }
}
