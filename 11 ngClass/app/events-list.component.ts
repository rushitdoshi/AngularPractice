import { Component } from '@angular/core';

@Component({
  selector: 'event-details',
  templateUrl: 'app/events-list.component.html',
  styles: [`
    .legend span { padding-right:30px; }
    .in-person { color: green; }
    .online { color: red; }
    .tbd { color: #aaa; }
    .thumbnail { margin-top:10px; padding-top:5px; }
    .label { font-size:14px; margin-bottom:10px; display:inline-block; }
  `]
})
export class EventsListComponent {
  const events = [
    {name:'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Road ', city: 'London', country: 'England'}, format:"InPerson"},
    {name:'ng-conf 2037', date: '4/15/2037', time: '9am', onlineUrl: 'https://www.ng-conf.org/', format:"Online"},
    {name:'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8am'},
    {name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}, format:"InPerson"}
  ];

  
  getTitleClass(eventFormat) {
    
    // Direct return big object
    /*
    return {
      // single quotes are needed only when there is dash within variable name
      'in-person': eventFormat === "InPerson",
      online: eventFormat === "Online", 
      tbd: eventFormat !== "InPerson" && eventFormat !== "Online"
    };
    */
    
    // Return object using constant boolean values
    /*
    const inPersonEvent = eventFormat === 'InPerson';
    const onlineEvent = eventFormat === 'Online';
    const tbdEvent = !inPersonEvent && !onlineEvent;
    return {'in-person': inPersonEvent, online: onlineEvent, tbd: tbdEvent};
    */
    
    // string return with if condition
    /*
    if (eventFormat === 'InPerson') {
      return 'in-person';
    } else if (eventFormat === 'Online') {
      return 'online';
    }
    return 'tbd';
    */
    
    // array return with if condition
    if (eventFormat === 'InPerson') {
      return ['in-person'];
    } else if (eventFormat === 'Online') {
      return ['online'];
    }
    return ['tbd'];
  }  
}