import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BuyerPage } from '../buyer/buyer';

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
}
