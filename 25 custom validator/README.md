# Creating a Custom Validator
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: The create event form in this app is already wired up with validation. To get 
to the form in the application, click the "Create New Event" link on the events list page. We'd like
to make it so that events can't be scheduled on weekends. Add a custom validator that prevents the
date field from being a weekend. Make it so that the validation message says "Cannot be a Saturday" or
"Cannot be a Sunday" based on whether the invalid date is a Saturday or Sunday. To do this you will need to:

1. Add the custom validator.
   _Hint:_ You can cast the value of the date field to a date and get the day of week using this 
   syntax: new Date([string value]).getDay(). If that returns a 6 or 0 it is a Saturday or Sunday.
   Casting a string to a date using new Date([string value]) is a naive approach, but it will work
   well enough for this exercise so long as you enter valid date formats.

1. Make the custom validator return an error object that contains the appropriate error message.

1. Add the new custom validator to the date field.

1. Update the html to display the error message returned from the validator if it is invalid.

A finished version of this exercise is available here for reference: http://plnkr.co/edit/rlUVPBV05BaLnbAiJflr?p=info
