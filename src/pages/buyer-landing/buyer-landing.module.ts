import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyerLandingPage } from './buyer-landing';

@NgModule({
  declarations: [
    BuyerLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyerLandingPage),
  ],
})
export class BuyerLandingPageModule {}
