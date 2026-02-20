import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaymentService {

  private baseUrl = 'http://localhost:5000/api/payment';

  constructor(private http: HttpClient) {}

  createOrder(employeeId: string, amount: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-order`, {
      employeeId,
      amount
    });
  }

  verifyPayment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/verify`, data);
  }
}