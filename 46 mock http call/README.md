# Mock an HTTP call
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: The movie.service.spec.ts file contains a test to check 
the addCastMember function of the movie service. The movie service sends a post
request using the http service. We need to mock that call. The mocked call
must return an observable. implement the missing pieces of the test


To Do This:

1. in the beforeEach function, create the mock http object so it can be passed into the movie service's constructor
2. in the it function, set up the mockHttp object so that the post method will return an observable
3. Use Observable.of(false) to create a simple Observable to return


A finished version of this exercise is available here for reference: https://plnkr.co/edit/VKf7CJnBZrs3ZxIyrFoP?p=info
