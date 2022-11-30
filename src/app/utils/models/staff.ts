import {User} from "./user";

export interface Employee extends User {
  role: EmployeeRole;
  code: string;
  salary?: number;
  start_date?: Date;
  end_date?: Date;
}

export type EmployeeRole = 'employee' | 'manager' | 'admin';
