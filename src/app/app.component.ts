import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';

import { HomePage } from '../pages/home/home';
import { BuyerSignupPage } from '../pages/buyer-signup/buyer-signup';
import { ContactPage } from '../pages/contact/contact';
import { ProductOfferPage } from '../pages/product-offer/product-offer';
import { SellerSignupPage } from '../pages/seller-signup/seller-signup';
import { BuyerPage } from '../pages/buyer/buyer';
import { BuyerLandingPage } from '../pages/buyer-landing/buyer-landing';
import { ProductListPage } from '../pages/product-list/product-list';
import { NegotiationsPage } from '../pages/negotiations/negotiations';
import { CancelNegotiationPage } from '../pages/cancel-negotiation/cancel-negotiation';
import { MoreDetailsPage } from '../pages/more-details/more-details';
import { ShippingPage } from '../pages/shipping/shipping';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,
    public app: App,public alertCtrl: AlertController) {
    platform.ready().then(() => {

      platform.registerBackButtonAction(() => {
  
        let nav = this.app.getActiveNavs()[0];
        let activeView = nav.getActive();
  
        if (activeView.name === 'HomePage') {
  
          const confirm = this.alertCtrl.create({
            title: 'Exit',
            message: 'Do you want to Exit from the app?',
            buttons: [
              {
                text: 'Cancel',
                handler: () => {
                  return;
                }
              },
              {
                text: 'Confirm',
                handler: () => {
                  platform.exitApp();
                }
              }
            ]
          });
  
          confirm.present();
  
        } 
  
      });
  
      statusBar.styleDefault();
      splashScreen.hide();
  
    });

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Buyer', component: BuyerPage },
      { title: 'Buyer Landing', component: BuyerLandingPage },
      { title: 'Product List', component: ProductListPage },
      { title: 'Seller Signup', component: SellerSignupPage },
      { title: 'Product Offer', component: ProductOfferPage },
      {title: 'Buyer SignUp', component: BuyerSignupPage},
      {title: 'Negotiations', component: NegotiationsPage},
      {title: 'Cancel Negotiation', component: CancelNegotiationPage},
      {title: 'More Details', component: MoreDetailsPage},
      {title: 'Shipping', component: ShippingPage},

    ];

  }
  showSplash = true; // <-- show animation

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false) // hide animation after 4s
    });
  }
  

  openPage(page) {
    this.nav.setRoot(page.component);
  }


}

