import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntrancePage } from '../entrance/entrance'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  entrancePage = EntrancePage;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
  }

  openItem() {
    this.navCtrl.push(EntrancePage);
  }

}
