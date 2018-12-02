import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBankPage } from './search-bank';

@NgModule({
  declarations: [
    SearchBankPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBankPage),
  ],
})
export class SearchBankPageModule {}
