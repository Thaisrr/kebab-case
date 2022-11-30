import {SafeUrl} from "@angular/platform-browser";

export interface Sandwich {
  id?: number;
  name: string;
  image: string;
  blob_img?: SafeUrl;
  description: string;
  price: number;
  allergens: string[];
  is_best_seller: boolean;
  ingredients: Ingredient[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Ingredient {
  id?: number;
  name: string;
  is_available: boolean;
  is_allergen: boolean;
  is_vegetarian: boolean;
  is_vegan: boolean;
  is_halal: boolean;
  is_kosher: boolean;
  quantity?: number;
}
