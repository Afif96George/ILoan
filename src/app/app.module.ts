
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchBankPage } from './../pages/search-bank/search-bank';
import { MortgagePage } from './../pages/mortgage/mortgage';
import { ResultsMortPage } from './../pages/results-mort/results-mort';
import { EligiblityPage } from './../pages/eligiblity/eligiblity';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchBankPage,
    MortgagePage,
    ResultsMortPage,
    EligiblityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SearchBankPage,
    MortgagePage,
    ResultsMortPage,
    EligiblityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
