import { Component } from '@angular/core'
import { EventService } from './event.service'

@Component({
  selector: 'event-details',
  templateUrl: 'app/events-list.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
    td a { color: orange }
  `]
})
export class EventsListComponent {
  events:any
  constructor(private eventService:EventService) {
    
  }
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
    
    
}