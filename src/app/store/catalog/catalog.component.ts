import { product } from './../../models/product';
import { CartService } from './../../services/cart.service';
import { productService } from './../../services/product.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

let cart = {

  isDeleted: 0,
  TotalQty: 0,
  products: []
}
@Component({
  selector: 'product-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [productService, CartService]
})
export class CatalogComponent implements OnInit {
  @Input() product: product
  products: any = []

  @Output() cartEmitter = new EventEmitter<any>()


  buttonClass: string = 'ui vertical animated button'

  constructor(private productsService: productService, private cartsService: CartService) {
  }

  ngOnInit() {
    if (Cookie.get('angular-cookie') != null) {
      this.cartsService.getCartById(+Cookie.get('angular-cookie'))
        .subscribe(data => {
          cart = data
          cart.products.forEach(element => {
            if (element._id === this.product._id) {
              this.buttonClass = 'ui disabled vertical animated button'
            }
          });
        })
    }
  }

  /*public getproductAdvancedSearch(product) {
    this.productsService.getproductAdvancedSearch(product).subscribe(products => {
      this.products = products
      console.log("from catalog")
    })
  }

  public getproductRapidSearch(product) {
    this.productsService.getproductRapidSearch(product).subscribe(products => {
      this.products = products
      console.log("from catalog")
    })
  }*/
  public addToCart(product) {
    console.log(product)
    if (product.isDeleted === 0) { // product exists
      console.log('cart will be added')
      console.log(cart)

      cart.products.push(product._id)
      cart.TotalQty += 1

      this.cartsService.addCart(cart).subscribe(data => {

        console.log(data)
        //this.products.push(product);

        if (Cookie.get('angular-cookie') === null) {
          Cookie.set('angular-cookie', data._id)
        }

      })
    }
    this.buttonClass = 'ui disabled vertical animated button'
  }

}
