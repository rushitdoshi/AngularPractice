import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent }   from './parent.component';
import { PRIME_TOKEN, PrimeCalc } from './primeCalc.service';

let primeCalc: PrimeCalc = window['primeCalc'];

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    ParentComponent ],
  providers: [
    {provide: PRIME_TOKEN, useValue: primeCalc}
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
