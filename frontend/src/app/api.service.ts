import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./model/product";
import {Observable} from "rxjs";
import {Customer} from "./model/customer";
import {Order} from "./model/order";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl= "http://localhost:3000/";


  constructor(private http: HttpClient) { }


   getProductList(): Observable<any> {
       return this.http.get(`${this.baseUrl}/products`)
   }

  getOrderList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders`)
  }

  getCustomerList(): Observable<any>  {
    return this.http.get(`${this.baseUrl}/customers`)
  }

  getProduct(id: number): Observable<any>  {
    return this.http.get(`${this.baseUrl}/products/${id}`)
  }

  getCustomer(id: number): Observable<any>  {
    return this.http.get(`${this.baseUrl}/customers/${id}`)
  }

  getOrder(id: number): Observable<any>  {
    return this.http.get(`${this.baseUrl}/orders/${id}`)
  }

  createProduct(product: Product): Observable<any>  {
    return this.http.post<Product>(`${this.baseUrl}/products`, product)

  }

  createCustomer(customer: Customer): Observable<any>  {
    return this.http.post<Customer>(`${this.baseUrl}/customers`, customer)
  }

  createOrder(order: Order): Observable<any>  {
    return this.http.post<Order>(`${this.baseUrl}/orders`, order)
  }

  updateProduct(id: number, product: Product): Observable<any>  {

    return this.http.put(`${this.baseUrl}/orders/${id}`, product)
  }

  deleteProduct(id: number): Observable<any>  {

    return this.http.delete(`${this.baseUrl}/orders/${id}`)
  }
}
