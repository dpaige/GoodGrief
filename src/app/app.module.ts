import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntrancePage } from '../pages/entrance/entrance';
import { Hub0Page } from '../pages/hub0/hub0';
import { Hub1Page } from '../pages/hub1/hub1';
import { Hub1panel1Page } from '../pages/hub1panel1/hub1panel1';
import { Hub1panel2Page } from '../pages/hub1panel2/hub1panel2';
import { Hub1panel3Page } from '../pages/hub1panel3/hub1panel3';
import { Hub2Page } from '../pages/hub2/hub2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntrancePage,
    Hub0Page,
    Hub1Page,
    Hub1panel1Page,
    Hub1panel2Page,
    Hub1panel3Page,
    Hub2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntrancePage,
    Hub0Page,
    Hub1Page,
    Hub1panel1Page,
    Hub1panel2Page,
    Hub1panel3Page,
    Hub2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
