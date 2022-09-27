import { Component } from '@angular/core';
import {Sandwich} from "../../utils/models/sandwich";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  sandwiches : Sandwich[] = [
    {
      id: 1,
      title: 'Kebab Classique',
      description: 'Le Kebab berliner par excellence',
      image: 'assets/sandwich.webp',
      price: 7.5,
      is_best_seller: true
    },
    {
      id: 2,
      title: 'Kebab Naan',
      description: 'Testez bla blabla miam miam',
      image: 'assets/naankebabD.png',
      price: 8.5,
      is_best_seller: false
    },
    {
      id: 3,
      title: 'Wrap Excellence',
      description: 'Le Kebab berliner par excellence',
      image: 'assets/wrap.png',
      price: 6.5,
      is_best_seller: true
    },
    {
      id: 4,
      title: 'Salade Fresh',
      description: 'Découvrez la fraicheur de la salade fresh',
      image: 'assets/salade.png',
      price: 9.5,
      is_best_seller: false
    },
  ]

}
