import { SearchBankPage } from './../pages/search-bank/search-bank';
import { MortgagePage } from './../pages/mortgage/mortgage';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EligiblityPage } from '../pages/eligiblity/eligiblity';

import firebase from 'firebase'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Mortgage', component: MortgagePage },
      { title: 'Search Bank', component: SearchBankPage },
      { title: 'Eligbility', component: EligiblityPage}
     
    ];

    //firebase constructor
    firebase.initializeApp({
      apiKey: 'AIzaSyAWV_-83YRsK0w_JEDwYYS4AiuO6QXBDqo',
      authDomain: 'banklist-cb9ea.firebaseapp.com',
      databaseURL: 'https://banklist-cb9ea.firebaseio.com',
      storageBucket: 'banklist-cb9ea.appspot.com',
      messagingSenderId: '760352646404',
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
