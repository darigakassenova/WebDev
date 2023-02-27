import { Component } from '@angular/core';

import { categories } from '../categories';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent {
  categories = [...categories];
}