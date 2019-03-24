import { Component } from '@angular/core';
import { TitleCasePipe } from './title-case.pipe';

@Component({
  selector: 'my-home',
  template: `
  <h1>{{myText | titlecase}}</h1>
  
  `
})
export class HomeComponent implements OnInit {
  myText = "this title should be in title case";

  constructor() {
    
  }

}

