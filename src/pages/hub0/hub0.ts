import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hub0',
  templateUrl: 'hub0.html',
})
export class Hub0Page {

  submitAnswer: FormGroup;

  submitAttempt: boolean = false;

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
 
    if(!this.submitAnswer.valid){
        console.log("fail");
    } 
    else {
        console.log("success!");
        console.log(this.submitAnswer.value);
    }
 
}

}
