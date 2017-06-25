import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Hub1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hub1',
  templateUrl: 'hub1.html',
})
export class Hub1Page {

  puzzlesComplete: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    storage.get('puzzlesComplete').then((val) => {
      console.log("Current value is:" + val);
      this.puzzlesComplete = val;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hub1Page');
  }

}
