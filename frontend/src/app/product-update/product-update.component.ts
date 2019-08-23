import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from '../api.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product = new Product;
  id: number;

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  updateProduct(product: any){
    this.route.params.subscribe(params => {
      this.id = +params.id;
      console.log(this.id);
    })
    this.apiService.updateProduct(this.id, product).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/products']);
      }, error1 => {
        console.log(error1);
      }
    )
  }

}
