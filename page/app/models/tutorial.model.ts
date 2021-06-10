export class Tutorial {
    constructor (
        public title: string,
        public summary: string,
        public thumbnail: string,
        public thumbnailType: "default" | "w" | "x" | "sizes" = "default",
        public additionalThumbnails: string[] = []
    ) {}
}