import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  puzzlesCompleted: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.submitAnswer = formBuilder.group({
        answer: ['',Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])]
    });

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
          this.puzzlesCompleted++;
          this.navCtrl.push(Hub1Page);
        } else {
          this.correctAnswer = false;
        }
    }
 
}

}
