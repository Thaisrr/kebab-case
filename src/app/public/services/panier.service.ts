import { Injectable } from '@angular/core';
import {Menu, Panier} from "../../shared/models/panier";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier: Panier;
  panier_size$: BehaviorSubject<number>;


  constructor(private http: HttpClient) {
    const saved_panier = localStorage.getItem('panier')
    if(saved_panier) {
      this.panier = JSON.parse(saved_panier);
    } else {
      this.panier = this.getEmptyPanier();
    }
    this.panier_size$ = new BehaviorSubject(this.panier.menus.length);
  }

  getEmptyPanier() {
    return {
      menus: [],
      total: 0,
      date: new Date()
    }
}

  add(menu: Menu) {
    this.panier.menus.push(menu);
    this.panier_size$.next(this.panier.menus.length)
    this.calculateTotal();
  }

  remove(menu: Menu) {
    const index = this.panier.menus.indexOf(menu);
    this.panier.menus.slice(index, 1);
    this.panier_size$.next(this.panier.menus.length)
    this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;
    this.panier.menus.forEach(menu => total += menu.total);
    this.panier.total = total;
    this.save();
  }

  save() {
    localStorage.setItem('panier', JSON.stringify(this.panier))
  }

  order(): Observable<{}> {
    this.panier.date = new Date();
    return this.http.post(`http://localhost:3000/orders`, this.panier).pipe(
      tap(() => this.resetPanier() )
    )
  }

  resetPanier() {
    this.panier = this.getEmptyPanier();
    this.panier_size$.next(this.panier.menus.length)
    this.save();
  }


}
