import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
  <child #timer></child>
  <button class="btn btn-primary" (click)="timer.stopTimer()" >Stop Timer</button>
  `
})
export class ParentComponent {
  
}
