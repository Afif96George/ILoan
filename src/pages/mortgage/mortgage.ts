import { ResultsMortPage } from './../results-mort/results-mort';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MortgagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mortgage',
  templateUrl: 'mortgage.html',
})
export class MortgagePage {
  mortgageAmount: number;
  interest: number;
  payment: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MortgagePage');
  }
  clicked() {
    console.log("button clicked!");
    console.log("mortgage: " + this.mortgageAmount);
    console.log("interest: " + this.interest);
    console.log("payment: " + this.payment);
   
    this.navCtrl.push(ResultsMortPage, {param1: this.mortgageAmount, param2: this.interest, param3: this.payment});
  }
}
