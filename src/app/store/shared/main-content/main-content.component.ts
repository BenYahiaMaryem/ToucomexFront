import { getTestBed } from '@angular/core/testing';
import { Tab } from './../../../models/tabs';
import { CartService } from './../../../services/cart.service';
import { product } from './../../../models/product';
import { productService } from './../../../services/product.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs/Observable';
import { PaginationInstance } from 'ngx-pagination'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [productService, CartService],
/*  changeDetection: ChangeDetectionStrategy.OnPush
*/})
export class MainContentComponent implements OnInit {
  products: product[]
  asyncproducts: Observable<product[]>
  product: product
  cart = {
    isDeleted: 0,
    TotalQty: 0,
    products: []
  }
  public loaded: boolean
  tab: Tab
  items: string[]
  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  }
  page: number = 1
  constructor(private service: productService, private cartService: CartService) {

  }

  ngOnInit() {
    console.log('in main content')
    this.tab = new Tab()
    this.items = this.tab.getItems()
    this.service.getAllproducts().subscribe(products => {
      this.products = products
      this.page = 1
      console.log(this.products)
    })
    if (Cookie.get('angular-cookie') != null) {
      this.cartService.getCartById(+Cookie.get('angular-cookie'))
        .subscribe(data => {
          this.cart = data
        })
    }
    console.log(this.products)    /*this.config = {
      itemsPerPage: 10,
      currentPage: p
    }*/
  }

  search(products: product[]) {
    this.products = products
  }
  public addToCart(product: product) {
    this.product = product
    console.log(product)
    if (product.isDeleted === 0) // product exists
    {
      console.log('cart will be added')
      console.log(this.cart)

      this.cart.products.push(product._id)
      this.cart.TotalQty += 1

      this.cartService.addCart(this.cart).subscribe(data => {

        console.log(data)
        //this.products.push(product);

        if (Cookie.get('angular-cookie') === null) {
          Cookie.set('angular-cookie', data._id)
        }

      })
    }
  }


  public display(products: product[]) {
    this.products = products
  }


}
