import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { HomeComponent }   from './home.component';
import { TitleCasePipe }   from './title-case.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TitleCasePipe
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

