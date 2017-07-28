import { CommandService } from './../../services/command.service';
import { Auth } from './../../services/custom-auth.service';
import { CartService } from './../../services/cart.service';
import { productService } from './../../services/product.service';
import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [productService, CartService, CommandService]
})

export class CartComponent implements OnInit, OnChanges, DoCheck {
  products: any = []
  data: any = []
  total: number = 0;

  cart = {
    _id:+Cookie.get('angular-cookie'),
    isDeleted: 0,
    products: [],
    TotalPrice: this.total,
    TotalQty: 0
  }


  /*@Input() TotalQty: number;
    @Input() oldPrice: number;*/
  constructor(private cartService: CartService, private productService: productService, private auth: Auth, private commandService: CommandService) { }

  ngOnInit() {
    this.cartService.getCartById(+Cookie.get('angular-cookie')).subscribe(data => {
      console.log(data)
    
      this.products = data.products
      console.log('get cart products')
      console.log(data.products)
      this.products.forEach(element => {
         let max=[]
         for(let i=1; i<= element.inMarket ; i++)
         {
           max.push(i)

         }
         element.max=max
      });
    })
    /*console.log(this.data+'after first sub')
        let fields = `${this.data.products[0]}`
        for(let i = 1; i < this.data.length; i++){
          fields += `,${this.data.products[i]}`
        }
        console.log(fields)
        this.productsService.getManyproducts(fields).subscribe(product => {
          this.products.push(product)
          console.log(`${this.products}=========>`)
        })
        console.log(this.products)
      */

  }
  ngOnChanges() {
    this.cartService.getCartById(+Cookie.get('angular-cookie')).subscribe(data => {
      this.products = data.products;
    })

    // console.log("total"+this.total)
  }

  ngDoCheck() {

    console.log("total" + this.total)
  }

  removeproductFromCart(id): void {
    console.log(id)
    this.products.splice(id, 1)

    this.cart.products=this.products
    this.cartService.removeproductFromCart(this.cart).subscribe(data => {
    //  this.products = data.products
      console.log(data)
    })

  }

  totalQ(): void {
    this.total = 0;
    for (let element of this.products) {
      this.total += element.oldPrice * element.TotalQty;
    }
  }


  trackproducts(index, product) {
    let t = product.oldPrice * product.TotalQty
    t = product.oldPrice * product.TotalQty + t
    this.total = product.oldPrice * product.TotalQty
    // console.log(product.oldPrice*product.TotalQty+"total "+this.total);
    return product ? product.TotalQty : undefined;

  }

  passCommand(): void {
    /*for(let element of this.products) {
      this.total += element.oldPrice * element.TotalQty;
    }*/
    
    let command = {
      products: this.products,
      cart: Cookie.get('angular-cookie')
    }
    
    this.commandService.addCommand(command).subscribe(data => {
      console.log(data)
      Cookie.set('angular-command', data._id)
    })
    Cookie.delete('angular-cookie')
  }
}

