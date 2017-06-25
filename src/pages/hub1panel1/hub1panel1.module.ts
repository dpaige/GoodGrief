import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hub1panel1Page } from './hub1panel1';

@NgModule({
  declarations: [
    Hub1panel1Page,
  ],
  imports: [
    IonicPageModule.forChild(Hub1panel1Page),
  ],
  exports: [
    Hub1panel1Page
  ]
})
export class Hub1panel1PageModule {}
