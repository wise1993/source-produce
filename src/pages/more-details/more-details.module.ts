import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreDetailsPage } from './more-details';

@NgModule({
  declarations: [
    MoreDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreDetailsPage),
  ],
})
export class MoreDetailsPageModule {}
