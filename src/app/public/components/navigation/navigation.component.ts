import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../services/panier.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  panier: Observable<number>;

  constructor(private panierService: PanierService) {
    this.panier = this.panierService.panier_size$;
  }

  ngOnInit(): void {}

}
