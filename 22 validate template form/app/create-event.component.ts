import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { EventService } from './event.service'

@Component({
  selector: 'create-event',
  templateUrl: 'app/create-event.component.html',
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
    em { color: #E05C65; padding-left:10px; }
  `]
})
export class CreateEventComponent {
  mouseoverEvent: any;
  constructor(private eventService:EventService, private router:Router) {
  }
  
  saveEvent(event: any) {
    this.eventService.saveEvent(event)
    this.router.navigate(['/events'])
  }
  
  cancel() {
    this.router.navigate(['/events'])
  }
}