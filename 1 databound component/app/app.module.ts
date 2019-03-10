import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailComponent } from './events/event-detail.component'; 

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    EventDetailComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

