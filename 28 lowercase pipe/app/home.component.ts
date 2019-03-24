import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `
    {{myText | lowercase}}
  
  `
})
export class HomeComponent implements OnInit {
  myText = "HELLO THERE. MAKE ME RENDER IN LOWER CASE";

  constructor() {
    
  }

}

