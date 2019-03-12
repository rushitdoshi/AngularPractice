# Use toHaveBeenCalledWith
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: The movie.service.spec.ts file contains a test to check 
the that the url is correct when the http post is called to persist the new cast member.
the test has a failing expectation right now. Implement a correct expectation
to check the URL


To Do This:

1. remove the existing expect
2. create a new expect, using the toHaveBeenCalledWith matcher
3. use jasmine.any to ignore the second parameter to the post method


A finished version of this exercise is available here for reference: https://plnkr.co/edit/qL1PV6oldg7Dme1InR6R?p=info
