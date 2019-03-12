import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'


@Component({
  selector: 'parent',
  template: `
  
    <h1>Making a Request</h1>
   
    <button class="btn btn-primary" (click)="makeRequest()">Send Request</button>
    
    <div *ngFor="let movie of movieList">
      {{movie.title}}
    </div>
  `
})
export class ParentComponent {
  movieList;
  
  constructor(private http: Http) {}

  makeRequest() {
    
  }
  
}

