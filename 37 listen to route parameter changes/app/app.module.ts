import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }         from './app.component';
import { MoviesComponent }   from './movies.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/movies/1',
        pathMatch: 'full'
      },
      {
        path: 'movies/:id',
        component: MoviesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

