import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Hub1Page } from '../hub1/hub1';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hub1panel1',
  templateUrl: 'hub1panel1.html',
})
export class Hub1panel1Page {

  puzzlesComplete: number = 0;
  submitAnswer: FormGroup;
  submitAttempt: boolean = false;
  correctAnswer: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private storage: Storage, public alertCtrl: AlertController) {

    storage.get('puzzlesComplete').then((val) => {
      this.puzzlesComplete = val;
    })

    this.submitAnswer = formBuilder.group({
      answer: ['',Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hub1panel1Page');
  }

  save(){
 
    this.submitAttempt = true;
    this.correctAnswer = false;

 
    if(!this.submitAnswer.valid){
        console.log("fail");
    } 
    else {
        if (this.submitAnswer.value.answer == "babies"){
          this.correctAnswer = true;
          this.storage.set('puzzlesComplete', this.puzzlesComplete + 1);
          this.showAlert()
          this.navCtrl.push(Hub1Page);
        } else {
          this.correctAnswer = false;
        }
    }
 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!!',
      subTitle: 'You are so smart!',
      buttons: ['OK']
    });
    alert.present();
  }

  goBackToHub() {
    this.navCtrl.push(Hub1Page);
  }

}
