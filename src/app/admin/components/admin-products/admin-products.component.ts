import { productSourceService } from './../../../services/product-source.service';
import { productService } from './../../../services/product.service';
import { product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  providers: [productService, productSourceService]
})
export class AdminproductsComponent implements OnInit {

  public products: product[]
  public productsFeed: string[][]
  constructor(private productService: productService, private service: productSourceService) { }

  ngOnInit() {
    this.productsFeed = this.service.getproductsUrl()
    this.productService.getAllproducts()
    .subscribe( data => {
      this.products = data
    })
  }
  parseResponse = {
    'products': [],
    'category': ''
  }
  parseproducts(res: any) {
    /*const tmp = [...this.products, ...res.products]
    this.products = tmp*/
    console.log(res)
  }

  addproduct(product: product) {
    this.ngOnInit()
  }

  deleteproduct(product: product) {
    this.ngOnInit()
  }



}
