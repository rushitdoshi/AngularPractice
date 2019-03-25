import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'


@Component({
  selector: 'parent',
  template: `
  
    <h1>Using Querystring Parameters</h1>
    <form>
    City: <input type="text" name="city" [(ngModel)]="city">
    <br><br>
    <button class="btn btn-primary" type="submit" (click)="makeRequest()">Get Weather</button>
    </form>
    <br><br>
    
    Tomorrow's Forecast: {{forecast}}
    
  `
})
export class ParentComponent {
  appid = "69bc9bb1bbaa496601358677ea57a017";
  city: string;
  constructor(private http: Http) {}

  makeRequest() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=' + this.appid)
    .map((response: Response) => {
      return response.json();
    })
    .subscribe(data => {
      this.forecast = data.weather[0].description;
    })
  }
  
}

