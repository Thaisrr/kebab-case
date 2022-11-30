import { Injectable } from '@angular/core';
import {Sandwich} from "../../shared/models/sandwich";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class KebabService {
  url = environment.api + '/menu';

  constructor(private http: HttpClient) { }

  getAllVisible(): Observable<Sandwich[]> {
    return this.http.get<Sandwich[]>(`${this.url}/visible`).pipe(
      tap(() => console.log('Kebabs fetched')),
      map((sandwiches : Sandwich[]): Sandwich[] => sandwiches.map(s => {
        s.image = environment.api + s.image;
        return s;
      })),
      tap((sandwiches) => console.log('Sandwiches', sandwiches)),
    );
  }

  getByIdIfVisible(id: number): Observable<Sandwich> {
    return this.http.get<Sandwich>(`${this.url}/${id}`);
  }
}
