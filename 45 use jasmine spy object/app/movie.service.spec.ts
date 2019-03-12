import { MovieService } from './movie.service';

describe('MovieService', () => {
  let movieService: MovieService;
  
  beforeEach(() => {
    movieService = new MovieService("Rambo");  
  })

  it('adding a cast member increases the cast member count by one', () => {
    // add code here
    
    movieService.addCastMember('Sylvester', 'Rambo', mockActorService);
    
    expect(movieService.castMembers.length).toBe(1)
    
  });

  
});

