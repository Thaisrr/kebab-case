import { Component, OnInit } from '@angular/core';
import {Panier} from "../../utils/models/panier";
import {PanierService} from "../../utils/services/panier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: Panier

  constructor(private panierService: PanierService, private router: Router) {
    this.panier = panierService.panier;
  }

  ngOnInit(): void {
  }

  order() {
    this.panierService.order().subscribe(() =>{
        alert("Votre commande à bien été prise en compte !");
        this.router.navigate(["/"])
      })
  }

}
