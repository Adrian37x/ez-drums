import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html'
})
export class TutorialComponent implements OnInit, OnDestroy {
    private routeSubscription: Subscription;
    private loadSound: HTMLAudioElement;

    tutorialTitle: string;

    constructor (
        private route: ActivatedRoute
    ) {
        this.loadClickSound();

        this.routeSubscription = this.route.params.subscribe(params => {
            this.tutorialTitle = params.title;
        });
    }

    ngOnInit() {
        this.loadSound.play();
    }

    ngOnDestroy() {
        this.routeSubscription?.unsubscribe();
    }

    private loadClickSound() {
        this.loadSound = new Audio();
        this.loadSound.src = "../assets/audio/Tutorial.mp3";
        this.loadSound.load();
    }
}