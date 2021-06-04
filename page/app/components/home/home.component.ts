import { Component } from '@angular/core';
import { Tutorial } from 'page/app/models/tutorial.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    tutorials: Tutorial[] = [
        new Tutorial(
            "Basics",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "",
            []
        ),
        new Tutorial(
            "Basics 2",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "",
            []
        ),
        new Tutorial(
            "Combined Patterns",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "",
            []
        ),
        new Tutorial(
            "Drum Rolls",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "",
            []
        ),
        new Tutorial(
            "Ghost Notes",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "",
            []
        )
    ];

    constructor() { }
}
