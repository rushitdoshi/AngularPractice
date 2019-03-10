import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailComponent } from './events/event-detail.component'; 
import { EventAddressComponent } from './events/event-address.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    EventDetailComponent,
    EventAddressComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

