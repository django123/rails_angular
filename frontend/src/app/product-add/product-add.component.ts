import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from '../api.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService ) { }

  ngOnInit() {
  }

}
