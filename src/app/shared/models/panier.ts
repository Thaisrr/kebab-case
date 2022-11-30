export interface Panier {
  menus: Menu[],
  total: number,
  date: Date
}

export interface Menu {
  id?: number;
  name: string;
  price: string;
  quantity: number;
  boissons: string;
  total: number;
  protein: string;
  legumes: string[];
}

export interface Supplement {
  id?: number;
  image?: string;
  name: string;
  price: number;
  description: string;
  type: SupplementType;
}

export type SupplementType = 'boisson' | 'extra';
