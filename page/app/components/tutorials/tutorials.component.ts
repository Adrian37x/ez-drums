import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Tutorial } from "page/app/models/tutorial.model";
import { tutorialOverviewData } from "./tutorial-overview.data";

@Component({
    selector: "app-tutorials",
    templateUrl: "./tutorials.component.html"
})
export class TutorialsComponent {
    tutorials: Tutorial[] = [];

    private clickSound: HTMLAudioElement;

    playClickSound() {
        this.clickSound.pause();
        this.clickSound.play();
    }

    constructor(
        private router: Router
    ) {
        window.scrollTo(0, 0);
        this.loadClickSound();
        this.tutorials = tutorialOverviewData;
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