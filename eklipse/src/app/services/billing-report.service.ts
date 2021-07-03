import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillReport } from '../Models/BillReport';
import { Response } from '../Models/Response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BillingReportService {

  url: string = `http://localhost:3000/api.v1/eklipse.v2`
  constructor(private http: HttpClient) { }


  getBillingReport(): Observable<Response> {
    return this.http.get<Response>(`${this.url}/invoices`)
  }


  postBillingReport(){

  }
}
