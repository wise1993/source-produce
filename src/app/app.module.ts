import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SellerSignupPage } from '../pages/seller-signup/seller-signup';
import { BuyerSignupPage } from '../pages/buyer-signup/buyer-signup';
import { BuyerPage } from '../pages/buyer/buyer';
import { BuyerLandingPage } from '../pages/buyer-landing/buyer-landing';
import { ProductListPage } from '../pages/product-list/product-list';
import { ContactPage } from '../pages/contact/contact';
import { ProductOfferPage } from '../pages/product-offer/product-offer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SellerSignupPage,
    BuyerSignupPage,
    BuyerPage,
    BuyerLandingPage,
    ProductListPage,
    ContactPage,
    ProductOfferPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SellerSignupPage,
    BuyerSignupPage,
    BuyerPage,
    BuyerLandingPage,
    ProductListPage,
    ContactPage,
    ProductOfferPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
