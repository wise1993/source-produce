import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-shipping',
  templateUrl: 'shipping.html',
})
export class ShippingPage {

  @ViewChild('navbar') navBar: Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShippingPage');
  }

  
  ionViewDidEnter() {
    this.navBar.backButtonClick = () => {
      ///here you can do wathever you want to replace the backbutton event
    };

  }

}
