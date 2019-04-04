import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/Category';
import { Observer, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories";

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
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
