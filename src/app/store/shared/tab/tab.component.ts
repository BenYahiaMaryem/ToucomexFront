import { product } from './../../../models/product';
import { productService } from './../../../services/product.service';
import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit/*, OnDestroy */{

  @Output() tab = new EventEmitter<product[]>()
  @Input() item: string = ''
  private subscription
  constructor(private service: productService) { }

  ngOnInit() {
  }

  /*ngOnDestroy() {
    this.subscription.unsubscribe()
  }*/

 public recentproducts(item) {
    let date = new Date()
    return (date.getFullYear() - item.editionDate < 2)
  }

  public onSales(item) {
    return (item.recentPrice - item.oldPrice != 0)
  }

  public topSaled(item) {
    return (item.inMarket - item.availableproducts > 0)
  }

  

  
  /*'All products',
          'Top Saled',
          'On Sales',
          'New Arrival',*/
  display(item: string) {
    switch (item) {
      case 'All products':
        this.subscription = this.service
          .getAllproducts()
          .subscribe(products => {
            this.tab.emit(products)
          })
        break;
      case 'Top Saled':
        this.subscription = this.service
          .getAllproducts()
          .subscribe(products => {
            this.tab.emit(products
            .filter(this.topSaled)
            .sort()
            .reverse()
            .slice(0, 5))
          })
        break;
      case 'On Sales':
        this.subscription = this.service
          .getAllproducts()
          .subscribe(products => {
            this.tab.emit(products
            .filter(this.onSales))
          })
        break;
      

      default:
        this.subscription = this.service
          .getAllproducts()
          .subscribe(products => {
            this.tab.emit(products)
          })
        break;
    }
  }

}
