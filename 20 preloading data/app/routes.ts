import { Routes } from '@angular/router'

import { EventsListComponent} from './events-list.component'
import { EventsListResolver } from './events-list-resolver.service'

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent},
  { path: '', redirectTo: '/events', pathMatch:'full' },
]