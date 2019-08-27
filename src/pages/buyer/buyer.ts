import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyerSignupPage } from '../buyer-signup/buyer-signup';


@IonicPage()
@Component({
  selector: 'page-buyer',
  templateUrl: 'buyer.html',
})
export class BuyerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyerPage');
  }

  BuyerSignUp(){
    this.navCtrl.push(BuyerSignupPage);
  }

}
