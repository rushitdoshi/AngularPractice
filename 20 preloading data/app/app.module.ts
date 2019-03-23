import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';
import { EventService } from './event.service';
import { appRoutes } from './routes';
import { EventListResolverService } from './event-list-resolver.service';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent
  ],
  providers: [ 
    EventService,
    EventListResolverService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

