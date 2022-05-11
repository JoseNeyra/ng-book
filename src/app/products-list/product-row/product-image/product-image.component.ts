import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;

  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { 
    this.product = new Product('','','',[],0);
  }

  ngOnInit(): void {
  }

}
