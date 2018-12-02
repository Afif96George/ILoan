import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EligiblityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eligiblity',
  templateUrl: 'eligiblity.html',
})
export class EligiblityPage {
  salaryAmount : number; //salary applicant
  CoAppSalary : number; //second Applicnt
  CommitmentAmount: number; //credit card , personal loan
  ExpensesAmount: number; // monthly expenses 
  MortgageAmount : number; //price of mortgage
  LoanAmount : number ;
  percentageLoan: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EligiblityPage');
  }
  calculateMatch()
  {
   // console.log(this.salaryAmount);
    var standardHouse = 500000;
    var nettIncome = (this.salaryAmount + this.CoAppSalary) - (this.CommitmentAmount + this.ExpensesAmount);
    var percentLoan =0;
    var TotalLoan = 0;
   // var TotalLoan=0;
    //  TotalLoan = (this.MortgageAmount * (percentLoan/100));
  
    //statement
  
    if(nettIncome>5000)
    {
      if(this.MortgageAmount>standardHouse)
      {
        percentLoan = 50;
      }
      else 
      {
        percentLoan = 20;
      }
    }
    else (nettIncome<5000)
    {
      if(this.MortgageAmount>standardHouse)
      {
        percentLoan = 90;
      }
      else 
      {
        percentLoan = 40;
      }
    }
    
    
    TotalLoan = (this.MortgageAmount * (percentLoan * 0.01)); 
  
  
    console.log('thus answer :'+"/n"+ percentLoan );
    console.log('AMount'+ TotalLoan);
    this.LoanAmount = TotalLoan;
   this.percentageLoan = percentLoan;
  }
  
}
