import { MovieService } from './movie.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


describe('MovieService', () => {
  let movieService: MovieService;
  let mockHttp;
  
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('http', ['post'])
    movieService = new MovieService(mockHttp);  
  })

  it('should use the correct URL when saving the new cast member', () => {
    
    mockHttp.post.and.returnValue(Observable.of(true));
    
    movieService.addCastMember('Rambo I', 'Sylvester', 'Rambo');
    
    // write expectation here
    expect(false).toBe(true)
    
  });

  
});

