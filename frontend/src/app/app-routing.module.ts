import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {OrderAddComponent} from "./order-add/order-add.component";
import {CustomerAddComponent} from "./customer-add/customer-add.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {CustomerUpdateComponent} from "./customer-update/customer-update.component";
import {OrderUpdateComponent} from './order-update/order-update.component';
import {ProductUpdateComponent} from "./product-update/product-update.component";

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },

  {
    path: 'products/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'orders',
    component: OrderListComponent
  },
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path: 'products/add',
    component: ProductAddComponent
  },
  {
    path: 'products/add/:id',
    component: ProductAddComponent
  },
  {
    path: 'orders/add',
    component: OrderAddComponent
  },
  {
    path: 'orders/add/:id',
    component: OrderAddComponent
  },

  {
    path: 'orders/:id',
    component: OrderUpdateComponent
  },
  {
    path: 'customers/add',
    component: CustomerAddComponent
  },
  {
    path: 'customers/add/:id',
    component: CustomerAddComponent
  },

  {
    path: 'customers/:id',
    component: CustomerUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
