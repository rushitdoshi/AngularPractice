import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

import { EventService } from './event.service';

@Component({
  selector: 'create-event',
  templateUrl: 'app/create-event.component.html',
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
  `]
})
export class CreateEventComponent implements OnInit {

  eventForm: FormGroup;
  constructor(private eventService:EventService, private router:Router) {
    
  }
  
  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    let name = new FormControl();
    let date = new FormControl();
    let time = new FormControl();
    let address = new FormControl();
    let city = new FormControl();
    let country = new FormControl();
    let location = new FormGroup({
      address: address,
      city: city,
      country: country
    });
    this.eventForm = new FormGroup({
      name: name,
      date: date,
      time: time,
      location: location
    })
  }

  saveEvent(event: any) {
    console.log(event);
    this.eventService.saveEvent(event)
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}