import { Category } from './../../../../models/caterogy';
import { product } from './../../../../models/product';
import { productService } from './../../../../services/product.service';
import { CategoryService } from './../../../../services/category.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [CategoryService, productService]
})
export class productFormComponent implements OnInit {
  categories: Category[]
  product: product
  productForm: FormGroup; // <--- heroForm is of type FormGroup
  @Output() insert = new EventEmitter<product>()
  constructor(private fb: FormBuilder, private service: CategoryService, private productService: productService) { }

  ngOnInit() {
    this.product = new product()
    this.createForm()
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
  saveproduct() {
    const formModel = this.productForm.value

    const saveproduct: product = {
      name: formModel.name,
      oldPrice: formModel.oldPrice,
      recentPrice: formModel.recentPrice,
      availableproducts: formModel.availableproducts,
      inMarket: formModel.availableproducts,
      description: formModel.description
    }
    this.productService.addproduct(saveproduct)
      .subscribe(data => this.insert.emit(data))
    this.productForm.reset()
    
  }

}
