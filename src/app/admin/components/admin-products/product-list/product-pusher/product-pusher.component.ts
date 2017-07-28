import { productService } from './../../../../../services/product.service';
import { CategoryService } from './../../../../../services/category.service';
import { Category } from './../../../../../models/caterogy';
import { product } from './../../../../../models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'product-pusher',
  templateUrl: './product-pusher.component.html',
  styleUrls: ['./product-pusher.component.css'],
  providers: [CategoryService, productService]
})
export class productPusherComponent implements OnInit {

  categories: Category[]
  @Input() product: product
  productForm: FormGroup; // <--- heroForm is of type FormGroup
  @Output() update = new EventEmitter<product>()
  @Output() updated = new EventEmitter<boolean>()
  constructor(private fb: FormBuilder, private service: CategoryService, private productService: productService) { // <--- inject FormBuilder
  }

  createForm() {
    this.productForm = this.fb.group({
      name: [this.product.name, Validators.required],
      oldPrice: [this.product.oldPrice, Validators.pattern('^[0-9]+$')],
      recentPrice: [this.product.recentPrice, Validators.pattern('^[0-9]+$')],
      availableproducts: [this.product.availableproducts, Validators.pattern('^[0-9]+$')],
      inMarket: [this.product.availableproducts, Validators.pattern('^[0-9]+$')],
      description: [this.product.description, [
        Validators.minLength(1)
      ]],
    })
  }


  ngOnInit() {
    /*this.service.getAllCategories()
    .subscribe(data => {
      this.categories = data
    })*/
    this.createForm()
  }

  updateproduct(product) {
    const formModel = this.productForm.value

    const saveproduct: product = {
      _id: this.product._id,
      name: formModel.name,
      oldPrice: formModel.oldPrice,
      recentPrice: formModel.recentPrice,
      availableproducts: formModel.availableproducts,
      inMarket: formModel.availableproducts,
      description: formModel.description
    }
    this.productService.updateproduct(saveproduct)
      .subscribe(data => {
        this.update.emit(data)
        this.updated.emit(false)
      })
  }
}
