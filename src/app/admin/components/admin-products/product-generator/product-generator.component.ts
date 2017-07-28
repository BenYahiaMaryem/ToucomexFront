import { product } from './../../../../models/product';
import { productSourceService } from '../../../../services/product-source.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-generator',
  templateUrl: './product-generator.component.html',
  styleUrls: ['./product-generator.component.css'],
  providers: [productSourceService]
})
export class productGeneratorComponent implements OnInit {

  @Output() parse = new EventEmitter<product[]>()

  @Input() product: string
  products: string[][]
  constructor(private service: productSourceService) { }

  ngOnInit() {
    this.products = this.service.getproductsUrl()
  }

  parseproducts(product) {
    console.log(product[0])
    this.service.parseRssFeed(product[0])
      .subscribe(data => {
        this.parse.emit(data)
      })
  }

}
