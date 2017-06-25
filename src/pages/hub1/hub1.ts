import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Hub1panel1Page } from '../hub1panel1/hub1panel1';
import { Hub1panel2Page } from '../hub1panel2/hub1panel2';
import { Hub1panel3Page } from '../hub1panel3/hub1panel3';
import { Hub2Page } from '../hub2/hub2';

@IonicPage()
@Component({
  selector: 'page-hub1',
  templateUrl: 'hub1.html',
})
export class Hub1Page {

  puzzlesComplete: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    storage.get('puzzlesComplete').then((val) => {
      this.puzzlesComplete = val;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hub1Page');
  }

  goToPanel1() {
    this.navCtrl.push(Hub1panel1Page);
  }
  goToPanel2() {
    this.navCtrl.push(Hub1panel2Page);
  }
  goToPanel3() {
    this.navCtrl.push(Hub1panel3Page);
  }

}
