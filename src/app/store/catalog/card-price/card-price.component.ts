import { product } from './../../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {
  @Input() product: product

  constructor() { }

  ngOnInit() {
  }

}
