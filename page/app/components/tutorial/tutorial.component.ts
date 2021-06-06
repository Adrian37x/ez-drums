import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html'
})
export class TutorialComponent implements OnInit {
    private loadSound: HTMLAudioElement;

    constructor () {
        this.loadClickSound();
    }

    ngOnInit() {
        this.loadSound.play();
    }

    private loadClickSound() {
        this.loadSound = new Audio();
        this.loadSound.src = "../assets/audio/Tutorial.mp3";
        this.loadSound.load();
    }
}