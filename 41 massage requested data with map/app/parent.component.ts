import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'parent',
  template: `
    <h1>Dealing with a Stream of Data</h1>
    
    <input (keypress)="keypress($event)">
    <br>
    <div>
    {{output}}
   
  `
})
export class ParentComponent {
  subject;
  output = [];
  
  constructor() {
    this.subject = new Subject();
  }
  
  ngOnInit() {
    this.subject
    .map((input: string) => input.toUpperCase())
    .subscribe(key => {
      this.output.push(key);
    })
  }

  keypress(e) {
    this.subject.next(e.key);
  }
  
  
}

