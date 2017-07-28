import { product } from './../../models/product';
import { Category } from './../../models/caterogy';
import { productService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
  providers: [productService, CategoryService]
})
export class ResearchComponent implements OnInit {
  categories: Category[]
  products: any[]
  product: any = {
    name: 'product name',
  /*  author: 'auhtor name',
    editionDate: 2000,
    edition: '',*/
    priceMin: 0,
    priceMax: 0,
    category: ''
  }
  @Output() search = new EventEmitter<product>()

  constructor(private categoryService: CategoryService,
    private productService: productService) {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  ngOnInit() {
    this.product = {
      name: null,
      /*author: null,
      editionDate: null,
      edition: null,**/
      priceMin: 10,
      priceMax: 500,
      categories: this.categories,
      category: null
    }
  }

  public getproductAdvancedSearch(product) {
    this.productService.getproductAdvancedSearch(product).subscribe(products => {
      this.search.emit(products)
    })
  }



}
