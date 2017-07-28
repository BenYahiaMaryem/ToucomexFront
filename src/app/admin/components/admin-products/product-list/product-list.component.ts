import { productService } from './../../../../services/product.service';
import { product } from './../../../../models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [productService]
})
export class productListComponent implements OnInit {

  @Input () product: product
  @Output() delete = new EventEmitter<product>()
  updateForm: boolean = false
  constructor(private productService: productService) { }

  ngOnInit() {
  }

  deleteproduct(product: product) {
    this.productService.removeproduct(product)
    .subscribe(data => this.delete.emit(product))
  }

  updateproduct(product) {
    this.updateForm = true
    this.ngOnInit()
  }

  updated(val: boolean) {
    this.updateForm = val
  }

}
