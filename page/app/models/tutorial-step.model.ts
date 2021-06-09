export class TutorialStep {
    constructor (
        public name: string,
        public video: string,
        public note: string,
        public description: string,
        public extra?: string
    ) {}
}