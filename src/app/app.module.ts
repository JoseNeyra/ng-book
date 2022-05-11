import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './products-list/product-row/product-row.component';
import { ProductImageComponent } from './products-list/product-row/product-image/product-image.component';
import { ProductDepartmentComponent } from './products-list/product-row/product-department/product-department.component';
import { PriceDisplayComponent } from './products-list/product-row/price-display/price-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
