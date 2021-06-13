import { AfterViewInit, Component } from '@angular/core';
declare const shaka: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
    private readonly manifestUrl = `${location.origin}${location.pathname}assets/streaming/dash/manifest.mpd`;

    private videoElement: HTMLVideoElement;
    private player: any;
    private isMusicTrack1: boolean = true;
    
    ngAfterViewInit() {
        this.videoElement = document.getElementById("trailerPlayer") as HTMLVideoElement;

        // Install built-in polyfills to patch browser incompatibilities.
        shaka.polyfill.installAll();
        
        // Check to see if the browser supports the basic APIs Shaka needs.
        if (shaka.Player.isBrowserSupported()) {
            this.initPlayer();
        } else {
            console.error('Browser not supported!');
        }
    }

    playPauseVideo() {
        if (this.videoElement.paused) {
            this.videoElement.play();
        } else {
            this.videoElement.pause();
        }
    }

    switchAudio() {
        this.player.getAudioLanguages();

        if (this.isMusicTrack1 == false) {
            this.player.selectAudioLanguage('en');
        } else {
            this.player.selectAudioLanguage('de');
        }

        this.isMusicTrack1 = !this.isMusicTrack1;
    }
  
    private initPlayer() {
        this.player = new shaka.Player(this.videoElement);
    
        this.player.addEventListener('error', this.onErrorEvent);

        this.player.load(this.manifestUrl).then(() => this.switchAudio()).catch(this.onError);
    }
  
    private onErrorEvent(event) {
        this.onError(event.detail);
    }
  
    private onError(error) {
        console.error('Error code', error.code, 'object', error);
    }
}
