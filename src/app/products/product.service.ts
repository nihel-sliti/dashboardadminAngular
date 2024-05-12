import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl =  'http://localhost:8080';
  constructor(private http: HttpClient){}

  public getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiServerUrl}/products`);
  }

  public addProducts( product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.apiServerUrl}/products/add`,  product);
  }

  public updateProducts( product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiServerUrl}/products/update`, product);
  }

  public deleteProducts( productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/products/delete/${ productId}`);
  }
}
