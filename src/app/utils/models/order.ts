import {User} from "./user";
import {Menu} from "./panier";

export interface Order {
  id: number;
  user: User;
  menus: Menu[];
  total: number;
  date: Date;
  status: OrderStatus;
}

export type OrderStatus = 'pending' | 'accepted' | 'refused' | 'delivered';
