import { Routes } from '@angular/router'

import { EventsListComponent} from './events-list.component'
import { EventListResolverService } from './event-list-resolver.service';

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent, resolve: {events:EventListResolverService}},
  { path: '', redirectTo: '/events', pathMatch:'full' }
]