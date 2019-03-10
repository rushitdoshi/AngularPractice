import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'child',
  template: `
    <h3>Child Counter: {{counter}}</h3>
    <button class="btn btn-primary" (click)="buttonClicked()">Click Me!</button>
  `
})
export class ChildComponent { 
  counter = 0;
  @Output() counterCaptured:EventEmitter = new EventEmitter();
  
  ngOnInit() {
    setInterval(() => {this.counter++}, 1000)
  }
  
  buttonClicked() {
    this.counterCaptured.emit(this.counter);
  }
}