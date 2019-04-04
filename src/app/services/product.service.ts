import { Injectable } from '@angular/core';
import { Product } from '../product/Product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observer, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data))
      }),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let message = "";
    if (err.error) {
      message = "Hata oluştu. Detay: " + err.error.message
    }
    else {
      message = "Sistemsel hata";
    }
    return throwError(message);
  }
}

