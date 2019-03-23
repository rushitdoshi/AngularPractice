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
  `]
})
export class CreateEventComponent {
  constructor(private eventService:EventService, private router:Router) {
    
  }
  
  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}