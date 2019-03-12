import { Injectable } from '@angular/core';
import { ActorService } from './actor.service';
import { Http } from '@angular/http';

@Injectable()
export class MovieService {
  castMembers = [];

  constructor(private http: Http) {
  }

  addCastMember(movieName: string, name: string, part: string) {
    let dup = this.castMembers.some(member => {
      return member.name === name || member.part === part
    })
    
    if(!dup) {
      this.castMembers.push({name: name, part: part});
      this.storeNewCastMember(movieName, name, part).subscribe();
    }
  }
  
  storeNewCastMember(movieName: string, name: string, part: string) {
    console.log(1)
    return this.http.post('/movies/' + movieName + '', { name: name, part: part});
  }
  
  
  
  
}