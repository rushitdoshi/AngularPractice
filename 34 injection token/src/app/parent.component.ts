import { Component, Inject } from '@angular/core';
import { PRIME_TOKEN, PrimeCalc } from './primeCalc.service';

@Component({
  selector: 'parent',
  template: `
  
    <h1>Prime Number</h1>
    The Prime Number Is: {{prime}}<br />
    <div *ngIf="prime === 5">Success!</div>
    <button class="btn btn-primary" (click)="getPrime()">Get Prime #</button>
    
  `
})
export class ParentComponent {
  prime;
  
  constructor(@Inject(PRIME_TOKEN) private primeCalc: PrimeCalc) {
    
  }
  
  getPrime() {
    this.prime = this.primeCalc.calculatePrime();
  }
  

}

