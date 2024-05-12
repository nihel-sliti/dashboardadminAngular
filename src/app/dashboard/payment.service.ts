import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payments } from './payments';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8080/payments'; // URL de votre API

  constructor(private http: HttpClient) { }

  getAllPayments(): Observable<Payments[]> {
    return this.http.get<Payments[]>(this.apiUrl);
  }

  changePaymentStatus(paymentId: number, status: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/changeStatus?id=${paymentId}&status=${status}`, {});
  }

  searchPaymentByCode(code: string): Observable<Payments> {
    return this.http.get<Payments>(`${this.apiUrl}/search?code=${code}`);
  }
}