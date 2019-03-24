import { Component } from '@angular/core';

@Component({
  selector: 'closable-well',
  template: `
    <div class="well" *ngIf="visible">
      <ng-content></ng-content><br>
      <button class="btn btn-primary" (click)="closeProjection()">Close</button>
    </div>
  `
})
export class ClosableWellComponent {

  visible: boolean = true;

  closeProjection() {
    this.visible = false;
  }
}