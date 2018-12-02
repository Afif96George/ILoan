import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the SearchBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bank',
  templateUrl: 'search-bank.html',
})


export class SearchBankPage {
  //declaration
  public Banklist:Array<any>;
  public loadedBankList:Array<any>;
  public BanklistRef:firebase.database.Reference;
  public searchListBank;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.BanklistRef = firebase.database().ref('/Bank');

    this.BanklistRef.on('value', Banklist => {
      let Banks = [];
      Banklist.forEach( Bank => {
       Banks.push(Bank.val());
        return false;
      });
    
      this.Banklist = Banks;
      this.loadedBankList = Banks;
    });
  }

  initializeItems(): void {
    this.Banklist = this.loadedBankList;
   }
//array
  
  
  getBank(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  // search by interest Rate
    this.Banklist = this.Banklist.filter((v) => {
      if(v.interestRate && q) {
        if (v.interestRate.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
      
    });
  
    console.log(q, this.Banklist.length);
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBankPage');
  }

  }

 

  /*declare restprovider as a public inside contructor and call up bank and search*/
 

/* search based on amount using function.
getAmount(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set b to the value of the searchbar
    var b = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!b) {
      return;
    }
  // search by interest Rate
    this.Banklist = this.Banklist.filter((v) => {
      if(v.AmountMortgage && b) {
        if (v.AmountMortgage.toLowerCase().indexOf(b.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
      
    });
  
    console.log(b, this.Banklist.length);
  
  } */
