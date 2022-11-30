import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {KebabService} from "../../services/kebab.service";
import {Sandwich} from "../../../shared/models/sandwich";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Menu} from "../../../shared/models/panier";
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  id?: number;
  sandwich?: Sandwich;
  order_form: FormGroup;
  proteins = ["Falafels à la Menthe", "Falafels Cumin", "Tofu Tandoori", "Pois Chiches Marinés"]
  boissons = ["Thé glacé Menthe", "Thé Glacé Gingembre", "Limonade Citron Vert", "Kombucha"]
  veggies = ["Salade", "Betteraves", "Oignons", "Maïs", "Olive", "Pickles de Carottes", "Gingembre Frais", "Coriandre", "Ciboulette", "Shitaké", "Poivrons Marinés"]

  constructor(
    private route: ActivatedRoute,
    private kebabService: KebabService,
    private panierService: PanierService
  ) {
    this.order_form = new FormGroup({
      quantity: new FormControl<number>(1),
      protein: new FormControl<string>(''),
      boisson: new FormControl<string>(''),
      legumes: new FormArray<FormControl>([])
    })
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.loadSandwich()
  }

  loadSandwich() {
    if(this.id) {
      this.kebabService.getByIdIfVisible(this.id)
        .subscribe(response => this.sandwich = response)
    }
  }

  addVeggie(veggie: string, event: Event) {
    const legume_array = this.order_form.controls['legumes'] as FormArray;
    const checkbox = event.target as HTMLInputElement;
    if(checkbox.checked) {
      legume_array.push(new FormControl(veggie));
    } else {
      const index = legume_array.controls.findIndex(control => control.value === veggie)
      legume_array.removeAt(index);
    }
  }

  saveOrder(e: Event) {
    if(this.sandwich) {
      let order: Menu = {
        ...this.order_form.value,
        name: this.sandwich?.name,
        price: this.sandwich?.price,
        total: this.sandwich.price * this.order_form.value.quantity
      }
      this.panierService.add(order);
      this.order_form.reset();
      const form = e.target as HTMLFormElement;
      form.reset();
    }
  }
}


