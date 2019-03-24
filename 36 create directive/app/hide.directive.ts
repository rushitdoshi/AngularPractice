import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[hide]'
})

export class HideDirective implements OnInit {

    private el: HTMLElement;
    constructor (ref: ElementRef) {
        this.el = ref.nativeElement;
    }

    ngOnInit () {
        this.el.addEventListener('mouseover', e => {
            this.el.style.visibility = "hidden";
        });
    }
} 