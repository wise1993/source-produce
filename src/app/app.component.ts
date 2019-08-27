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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage: any = NegotiationsPage;

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
      { title: 'Contact', component: ContactPage },
      { title: 'Buyer', component: BuyerPage },
      { title: 'BuyerLanding', component: BuyerLandingPage },
      { title: 'ProductList', component: ProductListPage },
      { title: 'SellerSignup', component: SellerSignupPage },
      { title: 'ProductOffer', component: ProductOfferPage },
      {title: 'BuyerSignUp', component: BuyerSignupPage},
      {title: 'Negotiations', component: NegotiationsPage}
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

