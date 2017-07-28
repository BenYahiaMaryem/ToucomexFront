import { product } from './../../models/product';
import { productService } from './../../services/product.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'store-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css'],
  providers: [productService]
})
export class HeaderSearchComponent implements OnInit {

  products: any[];

  product: any = {

    attr: 'RapidSearch'
  }
 @Output() search = new EventEmitter<product>()
  constructor(private productService: productService) { }

  ngOnInit() {
    this.product = {

      attr: ''
    }
  }

  public save(isValid: boolean, f: any, product: any) {
    if (f) {
      console.log(product)
      this.productService.getproductAdvancedSearch(product).subscribe(products => {
        this.products = products;
        console.log(products)
      })
    }
  }

  public getproductRapidSearch(product) {
    this.productService.getproductRapidSearch(product).subscribe(products => {
      this.search.emit(products)
    })
  }


}
