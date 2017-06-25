import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hub1Page } from './hub1';

@NgModule({
  declarations: [
    Hub1Page,
  ],
  imports: [
    IonicPageModule.forChild(Hub1Page),
  ],
  exports: [
    Hub1Page
  ]
})
export class Hub1PageModule {}
