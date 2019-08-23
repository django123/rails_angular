import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    OrderAddComponent,
    CustomerAddComponent,
    ProductListComponent,
    OrderListComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,

    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
