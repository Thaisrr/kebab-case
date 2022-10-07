export interface Panier {
  menus: Order[],
  total: number,
  date: Date
}

export interface Order {
  name: string;
  price: string;
  quantity: number;
  boissons: string;
  total: number;
  protein: string;
  legumes: string[];
}
