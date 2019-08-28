import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancelNegotiationPage } from './cancel-negotiation';

@NgModule({
  declarations: [
    CancelNegotiationPage,
  ],
  imports: [
    IonicPageModule.forChild(CancelNegotiationPage),
  ],
})
export class CancelNegotiationPageModule {}
