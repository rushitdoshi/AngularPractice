import { MovieService } from './movie.service';

describe('Movie Service test', () => {

    let movieService: MovieService;
    beforeEach(() => {
        movieService = new MovieService("Titatic");
    })
    
    describe('addCastMember', () => {
        it('should add new cast member', () => {
            movieService.addCastMember("Jack", "Actor");
            expect(movieService.castMembers.length).toBe(1);
            expect(movieService.castMembers[0].name).toBe("Jack");
            expect(movieService.castMembers[0].part).toBe("Actor");
        });
    });
    
  
});

