import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'titlecase'})

export class TitleCasePipe implements PipeTransform {
    transform(value: string): string {
        var words = value.split(' ');
        // Converting first letter of every word in words array (input sentence string) to upper case and concatenating rest of string
        var casedWords = words.map(word => word[0].toLocaleUpperCase() + word.slice(1))
        // Adding space again between words and forming output sentence string
        return casedWords.join(' ');
    }
}