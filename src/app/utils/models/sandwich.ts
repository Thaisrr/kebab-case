export interface Sandwich {
  id?: number;
  name: string;
  image: string;
  description: string;
  price: number;
  is_best_seller: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
