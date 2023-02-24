import { Component, OnInit } from '@angular/core';
import {Sandwich} from "../../../../shared/models/sandwich";
import {AdminKebabService} from "../../services/admin.kebab.service";

@Component({
  selector: 'app-dashboard-kebab',
  templateUrl: './dashboard-kebab.component.html',
  styleUrls: ['./dashboard-kebab.component.css']
})
export class DashboardKebabComponent implements OnInit {
  kebabs?: Sandwich[];
  open_dialog = false;
  kebab_to_delete: Sandwich | undefined;

  constructor(private kebabService: AdminKebabService) { }

  ngOnInit(): void {
    this.loadSandwiches();
  }

  loadSandwiches() {
    this.kebabService.getAll().subscribe(res => this.kebabs = res);
  }

  /**
   * @description S'effectue quand l'utilisateur⋅trice clique sur un des boutons de la fenêtre de dialogue.
   * @param confirm : boolean, true si l'utilisateur a cliqué sur "supprimer" dans la modale, false s'il a annulé
   */
  deleteKebab(confirm: boolean) {
    if(this.kebab_to_delete && confirm && this.kebab_to_delete.id) {
      this.kebabService.deleteOne(this.kebab_to_delete.id)
        .subscribe(() => this.loadSandwiches());
      this.toggle();
    } else if (!confirm) {
      this.toggle()
    }
  }

  toggle(delete_obj?: Sandwich) {
    this.kebab_to_delete = delete_obj;
    this.open_dialog = !this.open_dialog;
  }
}
