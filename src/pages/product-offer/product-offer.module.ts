import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductOfferPage } from './product-offer';

@NgModule({
  declarations: [
    ProductOfferPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductOfferPage),
  ],
})
export class ProductOfferPageModule {}
