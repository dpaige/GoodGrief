import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hub2Page } from './hub2';

@NgModule({
  declarations: [
    Hub2Page,
  ],
  imports: [
    IonicPageModule.forChild(Hub2Page),
  ],
  exports: [
    Hub2Page
  ]
})
export class Hub2PageModule {}
