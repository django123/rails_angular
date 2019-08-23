import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from "@angular/router";
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    products: Product[];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {

    return this.apiService.getProductList().subscribe( res => {
      this.products = res;
      console.log(res);
    }, error1 => {
      console.log(error1);
    });

  }

  editProduct(product) {
    this.router.navigate(['/products/add/' +product.id])
  }

  deleteProduct(product: Product): void{
    const  conf = confirm(" Êtes vous sûr?");
    if(conf) {
      this.apiService.deleteProduct(product.id).subscribe(
        res =>{
          this.products = this.products.filter( u => u !== product);
          this.goToProducts();
        }, error1 => {
          console.log(error1);
        }
      )
    }
  }

  private goToProducts() {
    this.router.navigate(['/products']);
  }
}
