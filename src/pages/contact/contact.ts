import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  // users: any[] = [
  //   {
  //     id: 1,
  //     first: 'Alice',
  //     last: 'Smith',
  //   },
  //   {
  //     id: 2,
  //     first: 'Bob',
  //     last: 'Davis',
  //   },
  //   {
  //     id: 3,
  //     first: 'Charlie',
  //     last: 'Rosenburg',
  //   }
  // ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
