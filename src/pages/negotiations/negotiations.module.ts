import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NegotiationsPage } from './negotiations';

@NgModule({
  declarations: [
    NegotiationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NegotiationsPage),
  ],
})
export class NegotiationsPageModule {}
