import {Injectable} from '@angular/core';
import { EventService } from './event.service';
import { ActivatedRouteSnapshot, CanActivate} from '@angular/router';

@Injectable()
export class EventActivatorService implements CanActivate {

    constructor(private eventService: EventService) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
       return !!this.eventService.getEvent(+route.params['eventId']);
    }

}
