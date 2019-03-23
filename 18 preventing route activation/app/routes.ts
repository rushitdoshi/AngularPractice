import { Routes } from '@angular/router';

import { EventsListComponent} from './events-list.component';
import { EventDetailsComponent} from './event-details.component';
import { EventActivatorService } from './event-activator.service';

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:eventId', component: EventDetailsComponent, canActivate: [EventActivatorService] },
  { path: '', redirectTo: '/events', pathMatch:'full' }
]