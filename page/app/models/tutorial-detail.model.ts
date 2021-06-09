import { TutorialStep } from "./tutorial-step.model";

export class TutorialDetail {
    constructor (
        public title: string,
        public steps: TutorialStep[]
    ) {}
}