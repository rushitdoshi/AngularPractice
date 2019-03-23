import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';
import { EventService } from './event.service';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule 
  ],
  declarations: [
    AppComponent,
    EventsListComponent
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

