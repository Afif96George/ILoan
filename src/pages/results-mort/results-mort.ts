import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsMortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results-mort',
  templateUrl: 'results-mort.html',
})
export class ResultsMortPage {

  months: number = 0;
  mortgageAmount = this.navParams.get('param1');
  interest = this.navParams.get('param2');
  payment = this.navParams.get('param3');
  list=[];
  CreditDurationMonth: any;
  TotalCredithMonth : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsMortPage');
    console.log(this.mortgageAmount);
    console.log(this.interest);
    console.log(this.payment);
    this.calculateMortgage();
  }
  calculateMortgage() {// function

    while(parseFloat(this.mortgageAmount) > parseFloat(this.payment)) {
      console.log("while loop was executed");
      var pay = this.payment - (this.mortgageAmount*(this.interest/100))/12;
      this.mortgageAmount = this.mortgageAmount - pay;
      this.months++;
      var interest = this.payment-pay;
      var year = (this.months++/12);
     // this.listBalance.push(this.mortgageAmount.toFixed(2));
     // this.listInterest.push(this.interest.toFixed(2));
     // this.listPayment.push(pay.toFixed(2));
     // this.listMonth.push(this.TotalCredithMonth);
      //this.list.push(this.months + ". Balance: " + this.mortgageAmount.toFixed(2) + "MYR Payment: " + pay.toFixed(2) + "MYR Interest: " + interest.toFixed(2) + "MYR");
      //this.list.push({"balance": this.mortgageAmount.toFixed(2)});
      this.list.push({"interest": interest.toFixed(2)});
      this.list.push({"payment": pay.toFixed(2)});
      this.list.push({"month": year.toFixed(0.1)});
      console.log(this.months + " Rest: " + this.mortgageAmount + " Payment: " + pay + " Interest: " + interest);
     
    }
/* let lists = this.list;
      lists.pay = pay;
      lists.payment = this.mortgageAmount;
      lists.interest = this.interest;
      lists.year = this.TotalCredithMonth;
      this.list.push(lists.pay,lists.payment,lists.interest,lists.year);
    */
    //
    var CreditDurationMth = this.months + 1;
    var TotalcreditMnth = CreditDurationMth/12;
    this.CreditDurationMonth = CreditDurationMth;
    this.TotalCredithMonth =  TotalcreditMnth.toFixed(1);

    
    console.log(CreditDurationMth + "Last month Balance " + this.mortgageAmount + " Loan Paid Out");
    console.log("Credit Duration: " + CreditDurationMth + " Monthly Payment. " +  TotalcreditMnth + " Years");
 
    this.months = 0;
}
}