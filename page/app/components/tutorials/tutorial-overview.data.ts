import { Tutorial } from "page/app/models/tutorial.model";

export const tutorialOverviewData: Tutorial[] = [
    new Tutorial(
        "Basics",
        "Make yourself familiar with percussion. Here you learn the basics of rythmic patterns.",
        "thumbnails-basics/Thumbnail-Basics-460",
        "w",
        ["thumbnails-basics/Thumbnail-Basics-920", "thumbnails-basics/Thumbnail-Basics"]
    ),
    new Tutorial(
        "Basics 2",
        "Something a bit more advanced. But I'm sure you got this! Less goooooooooooooooo, yeye!",
        "thumbnails-basics2/Thumbnail-Basics2-460",
        "x",
        ["thumbnails-basics2/Thumbnail-Basics2-920", "thumbnails-basics2/Thumbnail-Basics2"]
    ),
    new Tutorial(
        "Combined Patterns",
        "Let's see what you've already learned and what you can create with it. It's more than you think.",
        "Thumbnail-Combined-Patterns"
    ),
    new Tutorial(
        "Drum Rolls",
        "What you know about rollin' down in the deep? When your brain goes numb, you can call that mental freeze...",
        "Thumbnail-DrumRolls"
    ),
    new Tutorial(
        "Ghost Notes",
        "Ghost Notes are very impressive and underrated. Once mastered and done subconsciously you will feel a major improvement.",
        "Thumbnail-Ghost-Notes"
    )
];