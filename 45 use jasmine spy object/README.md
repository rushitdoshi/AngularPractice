# Use a Jasmine Spy Object
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: The movie.service.spec.ts file contains a test to check 
the addCastMember function of the movie service. The movie service uses
the actor service in its function. We need to test the movie service without
testing the actor service at the same time. So the actor service needs to be mocked.
Create a mock Actor service that will let the test pass


To Do This:

1. at the beginning of the it function, use createSpyObj to crete a mock actor service
2. be sure to look and see how it's used in the movie service
3. Make sure to have the mock actor service return the correct value to make the test pass

A finished version of this exercise is available here for reference: https://plnkr.co/edit/i5nx3UFTf6RwKCsFBnnJ?p=info
