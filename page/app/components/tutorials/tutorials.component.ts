import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Tutorial } from "page/app/models/tutorial.model";

@Component({
    selector: "app-tutorials",
    templateUrl: "./tutorials.component.html"
})
export class TutorialsComponent {
    tutorials: Tutorial[] = [
        new Tutorial(
            "Basics",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "Thumbnail-Basics"
        ),
        new Tutorial(
            "Basics 2",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "Thumbnail-Basics2"
        ),
        new Tutorial(
            "Combined Patterns",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "Thumbnail-Combined-Patterns"
        ),
        new Tutorial(
            "Drum Rolls",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "Thumbnail-DrumRolls"
        ),
        new Tutorial(
            "Ghost Notes",
            "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
            "Thumbnail-Ghost-Notes"
        )
    ];

    private clickSound: HTMLAudioElement;

    playClickSound() {
        this.clickSound.pause();
        this.clickSound.play();
    }

    constructor(
        private router: Router
    ) {
        this.loadClickSound();
    }

    private loadClickSound() {
        this.clickSound = new Audio();
        this.clickSound.src = "../assets/audio/Bonk.mp3";
        this.clickSound.load();
    }

    selectTutorial(tutorial: Tutorial) {
        this.router.navigate([`tutorial/${tutorial.title}`]);
    }
}