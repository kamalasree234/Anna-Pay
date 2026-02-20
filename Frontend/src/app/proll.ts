import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class proll {

  private apiUrl = 'http://localhost:5000/api/payroll';

  constructor(private http: HttpClient) {}

  createPayroll(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }
}