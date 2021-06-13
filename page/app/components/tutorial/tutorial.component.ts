import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TutorialDetail } from "page/app/models/tutorial-detail.model";
import { Subscription } from "rxjs";
import { tutorialDetailData } from "./tutorial-detail.data";

@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html'
})
export class TutorialComponent implements OnInit, OnDestroy {
    private routeSubscription: Subscription;
    private loadSound: HTMLAudioElement;

    tutorial: TutorialDetail;

    constructor (
        private route: ActivatedRoute
    ) {
        window.scrollTo(0, 0);
        this.loadClickSound();
    }
    
    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.tutorial = tutorialDetailData.find(t => t.title == params.title) || tutorialDetailData[0];
        });

        this.loadSound.playbackRate = Math.random() + 0.5;
        this.loadSound.play();
    }

    ngOnDestroy() {
        this.routeSubscription?.unsubscribe();
    }

    private loadClickSound() {
        this.loadSound = new Audio();
        this.loadSound.src = "./assets/audio/Tutorial.mp3";
        this.loadSound.load();
    }
}