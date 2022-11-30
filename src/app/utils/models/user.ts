import {Order} from "./order";
import {Employee} from "./staff";

export interface User {
  id?: number;
  email: string;
  firstname: string;
  lastname: string;
  addresses: Address[];
  phone: string;
  orders?: Order[];
  comments?: Comment[];
  grade: UserGrade;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Comment {
  id?: number;
  user: User;
  content: string;
  employee: Employee;
}

export type UserGrade = 'bronze' | 'silver' | 'gold';

export interface Address {
  id?: number;
  name?: string;
  number: number;
  street: string;
  city: string;
  zip: string;
}
