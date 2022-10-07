import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {KebabService} from "../../utils/services/kebab.service";
import {Sandwich} from "../../utils/models/sandwich";
import {Observable} from "rxjs";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

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

  constructor(private route: ActivatedRoute, private kebabService: KebabService) {
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
      this.kebabService.getById(this.id)
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

  saveOrder() {
    let order = this.order_form.value;
    if(this.sandwich) {
      order.name = this.sandwich.name;
      order.price = this.sandwich.price;
      order.total = this.sandwich.price * order.quantity;

      let order2: Order = {
        ...this.order_form.value,
        name: this.sandwich?.name,
        price: this.sandwich?.price,
        total: this.sandwich.price * this.order_form.value.quantity
      }
    }

    console.log(order);
  }
}

interface Order {
  name: string;
  price: string;
  quantity: number;
  boissons: string;
  total: number;
  protein: string;
  legumes: string[];
}
