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

  getById(id: number): Observable<Sandwich> {
    return this.http.get<Sandwich>(`${this.url}/${id}`);
  }

  create(new_sandwich: Sandwich) {}


  deleteOne(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id)
  }

}
