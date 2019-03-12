# Creating a Reactive Form
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: This app has a create event form that is not currently wired up. To get to the
form in the application, click the "Create New Event" link on the events list page. Wire up the
form using Reactive (model-based) forms so that the data entered can be saved as a new event. When 
the save button is pressed, call `eventService.save()` and pass in the new event to be saved from 
the data entered on the form. After saving the event, send the user to the events list page. The 
new event should then be visible on the events list page. To do this you will need to:

1. Create the form and form controls in the component. Wire up the form and form elements using the appropriate bindings.
   
  Note: Ensure that the address fields get saved to a `location` object on the `event`.
   
  _HINT:_ You can use formGroupName (i.e. `<div formGroupName="location">`) to wrap the nested address controls in a 
  `location` object in the html and you can use `FormGroup` in the component (i.e. `this.location = new FormGroup({...}))
  just like you do with a form object.

1. Wire up the ngSubmit on the form.

1. In the method you wire up the ngSubmit to a save method on the component and in that method call 
   `eventService.saveEvent` and pass in the new event from the form data.

1. Also wire up the save method on the component to navigate the user back to the events list page after saving.

1. Add the `ReactiveFormsModule` module to the app module

A finished version of this exercise is available here for reference: http://plnkr.co/edit/sYixncAm9zbg0B0QbuWv?p=info
