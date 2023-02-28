import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, categories} from '../categories';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product | undefined;
  category: Category | undefined;

  constructor(
    private activRoute: ActivatedRoute
  ) {
  }
  products = [...products]
  removeProduct(ind : number){
    // @ts-ignore
    this.category.items = this.category.items.filter((x) => x.id !== ind);
  }
  ngOnInit() {
    const routeParams = this.activRoute.snapshot.paramMap;
    const categoryNFromRoute = (routeParams.get('categoryName'));
    console.log(routeParams)
    console.log(categoryNFromRoute)
    this.products = products.filter(p => p.category === categoryNFromRoute)
    console.log(this.products)
  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/