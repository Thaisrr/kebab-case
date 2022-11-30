import { Injectable } from '@angular/core';
import {Sandwich} from "../models/sandwich";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class KebabService {
  url = environment.api + '/menu';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }


  getAll(): Observable<Sandwich[]> {
    return this.http.get<Sandwich[]>(`${this.url}`);
  }

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


  getById(id: number): Observable<Sandwich> {
    return this.http.get<Sandwich>(`${this.url}/${id}`);
  }

  create(new_kebab: Sandwich, file: File): Observable<boolean> {
    return this.http.post<Sandwich>(this.url, new_kebab).pipe(
      map((kebab: Sandwich) => kebab.id),
      tap(() => console.log('Kebab created')),
      switchMap((id?: number) => this.saveImage(file, id ?? 0)),
      tap((img) => console.log('Image saved', img)),
      map(() => true)
    )
  };




  deleteOne(id: number): Observable<{}> {
    return this.http.delete<{}>(this.url + '/' + id);
  }

  saveImage(file: File, id: number): Observable<any> {
    console.log(file)
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(this.url + '/image/' + id , formData);
  }

  dataURItoBlob(dataURI: string): SafeUrl {
    console.log('starting conversion');
    const byteString = window.atob(window.btoa(dataURI));
    console.log('byteString', byteString);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    console.log('arrayBuffer', arrayBuffer);
    const int8Array = new Uint8Array(arrayBuffer);
    console.log('int8Array', int8Array);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));

   // return blob;
  }
}
