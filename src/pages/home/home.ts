import { Component, ViewChild } from '@angular/core';
import { NavController, Navbar } from 'ionic-angular';

import { BuyerPage } from '../buyer/buyer';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 

  constructor(public navCtrl: NavController) {

  }

  gotoBuyer(){
    this.navCtrl.push(BuyerPage);
  }

  gotoContact() {
    this.navCtrl.push(ContactPage);
  }

  
}
