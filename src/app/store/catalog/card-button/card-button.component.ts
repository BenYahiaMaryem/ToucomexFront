import { Cart } from './../../../models/cart';
import { productService } from './../../../services/product.service';
import { CartService } from './../../../services/cart.service';
import { product } from './../../../models/product';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

let cart = {

  isDeleted: 0,
  TotalQty: 0,
  products: []
}
@Component({
  selector: 'card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css'],
  providers: [CartService]
})
export class CardButtonComponent implements OnInit/*, OnChanges, DoCheck*/ {
  @Input() product: product
  @Output() cartEmitter = new EventEmitter<any>()
  buttonClass: string = 'ui vertical animated button'
  constructor(private cartsService: CartService) { }

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

  /*ngOnChanges() {
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
  }*/

  /*ngDoCheck() {
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
        if (Cookie.get('angular-cookie') === null) {
          Cookie.set('angular-cookie', data._id)
        }
      })
    }
    this.buttonClass = 'ui disabled vertical animated button'
  }

}
