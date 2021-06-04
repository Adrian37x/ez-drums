import { TutorialStep } from "./tutorial-step.model";

export class Tutorial {
    constructor (
        public title: string,
        public summary: string,
        public thumbnail: string,
        public tutorialSteps: TutorialStep[]
    ) {}
}