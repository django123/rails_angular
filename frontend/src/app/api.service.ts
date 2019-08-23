import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl= "http://localhost:3000/";


  constructor(private http: HttpClient) { }


   getProductList() {
       return this.http.get(`${this.baseUrl}/products`)
   }

  getOrderList() {
    return this.http.get(`${this.baseUrl}/orders`)
  }

  getCustomerList() {
    return this.http.get(`${this.baseUrl}/customers`)
  }

  getProduct(id: number) {
    return this.http.get(`${this.baseUrl}/customers/${id}`)  }
}
