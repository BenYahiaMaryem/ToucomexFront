import { product } from './../../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {
  @Input() product: product

  constructor() { }

  ngOnInit() {
  }

}
