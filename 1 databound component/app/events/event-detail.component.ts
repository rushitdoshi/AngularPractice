import { Component } from '@angular/core';

@Component({
  selector: 'event-detail',
  templateUrl: 'app/events/event-detail.component.html'
})
export class EventDetailComponent {
  
  const event = {
    name:'ngConf 2025', 
    date: '3/1/2025', 
    time: '8am', 
    location: {
      address: '123 Main St', 
      city: 'Salt Lake City, UT', 
      country: 'USA'
    }
  };
}