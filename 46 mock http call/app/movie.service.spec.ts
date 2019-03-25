import { MovieService } from './movie.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


describe('MovieService', () => {
  let movieService: MovieService;
  let mockHttp;
  
  beforeEach(() => {
    // create mock here
    mockHttp = jasmine.createSpy('mockHttp', ['post']);
    movieService = new MovieService(mockHttp);  
  })

  it('adding a cast member increases the cast member count by one', () => {
    
    mockHttp.post.and.returnValue(Observable.of(true));
    
    movieService.addCastMember('Rambo I', 'Sylvester', 'Rambo');
    
    expect(movieService.castMembers.length).toBe(1)
    
  });

  
});

