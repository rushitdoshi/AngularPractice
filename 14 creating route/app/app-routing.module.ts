import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListComponent } from './events-list.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: 'events',
    component: EventsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
