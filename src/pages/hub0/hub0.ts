import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Hub1Page } from '../hub1/hub1';

@IonicPage()
@Component({
  selector: 'page-hub0',
  templateUrl: 'hub0.html',
})
export class Hub0Page {

  submitAnswer: FormGroup;

  submitAttempt: boolean = false;
  correctAnswer: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private storage: Storage) {
    this.submitAnswer = formBuilder.group({
        answer: ['',Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])]
    });

    this.storage.set('puzzlesComplete', 0);  //initialize to zero at start of game

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hub0Page');
  }

  save(){
 
    this.submitAttempt = true;
    this.correctAnswer = false;

 
    if(!this.submitAnswer.valid){
        console.log("fail");
    } 
    else {
        if (this.submitAnswer.value.answer == "brain"){
          this.correctAnswer = true;
          this.storage.set('puzzlesComplete', 1);
          this.navCtrl.push(Hub1Page);
        } else {
          this.correctAnswer = false;
        }
    }
 
  }

}
