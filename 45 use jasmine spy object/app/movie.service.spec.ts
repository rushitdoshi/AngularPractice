import { MovieService } from './movie.service';

describe('MovieService', () => {
  let movieService: MovieService;
  
  beforeEach(() => {
    movieService = new MovieService("Rambo");  
  })

  it('adding a cast member increases the cast member count by one', () => {
    
    let mockActorService = jasmine.createSpy('mockActorService', ['canAddMovieToActor']);
    mockActorService.canAddMovieToActor.and.returnValue(true);
    
    movieService.addCastMember('Sylvester', 'Rambo', mockActorService);
    
    expect(movieService.castMembers.length).toBe(1)
    
  });

  
});

