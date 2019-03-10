import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-address',
  templateUrl: 'app/events/event-address.component.html'
})
export class EventAddressComponent {
  @Input() location: any; 
}