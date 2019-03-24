import { FormControl } from '@angular/forms';

export function restrictWeekendDates(control: FormControl) : {[key: string]: any} {
    const date = new Date(control.value);
    return (date.getDay() == 0 || date.getDay() == 6) ? 
    {'restrictedDay': date.getDay() == 0 ? 'Sunday' : 'Saturday'} : null;
  }