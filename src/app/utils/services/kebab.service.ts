import { Injectable } from '@angular/core';
import {Sandwich} from "../models/sandwich";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KebabService {
  url = 'http://localhost:3000/kebabs';

  constructor(private http: HttpClient) {}


  getAll(): Observable<Sandwich[]> {
    return this.http.get<Sandwich[]>(this.url);
  }

  create(new_sandwich: Sandwich) {}

  deleteOne(kebab: Sandwich) {}

}
