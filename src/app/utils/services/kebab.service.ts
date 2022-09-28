import { Injectable } from '@angular/core';
import {Sandwich} from "../models/sandwich";

@Injectable({
  providedIn: 'root'
})
export class KebabService {
  sandwiches : Sandwich[] = [
    {
      id: 1,
      title: 'KEBAb classique',
      description: 'Le Kebab berliner par excellence',
      image: 'assets/sandwich.webp',
      price: 7.5,
      is_best_seller: true
    },
    {
      id: 2,
      title: 'Kebab NAAN',
      description: 'Testez bla blabla miam miam',
      image: 'assets/naankebabD.png',
      price: 8.5,
      is_best_seller: false
    },
    {
      id: 3,
      title: 'wrap excellence',
      description: 'Le Kebab berliner par excellence',
      image: 'assets/wrap.png',
      price: 6.5,
      is_best_seller: true
    },
    {
      id: 4,
      title: 'salade Fresh',
      description: 'Découvrez la fraicheur de la salade fresh',
      image: 'assets/salade.png',
      price: 9.5,
      is_best_seller: false
    },
  ]

  getAll(): Sandwich[] {
    // va chercher dans l'API
    return this.sandwiches;
  }

}
