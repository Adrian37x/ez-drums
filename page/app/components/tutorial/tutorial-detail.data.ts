import { TutorialDetail } from "page/app/models/tutorial-detail.model";
import { TutorialStep } from "page/app/models/tutorial-step.model";

export const tutorialDetailData: TutorialDetail[] = [
    new TutorialDetail("Basics", [
        new TutorialStep("Viertel", "basics/Viertel", "basics/Viertel", `
            Music is basically maths. In this segment we see four "Viertel" which will be displayed as a 4/4 "Takt". 
            More "Takt-Arten" are 3/4, 7/8 or 2/2. You choose it based on the type of music you want to express. 
            For example a "Marsch" is often written in a 2/2 "Takt".
        `),
        new TutorialStep("Achtel", "basics/Achtel", "basics/Achtel", `
            It's just twice as fast as the previous step. Remember to switch between right and left while playing as it's shown in the picture.
        `),
        new TutorialStep("Sechzehntel", "basics/Sechzehntel", "basics/Sechzehntel", "Again just twice as fast as the previous step")
    ]),
    new TutorialDetail("Basics 2", [
        new TutorialStep("Triolen", "basics2/Triolen", "basics2/Triolen", `
            "Triolen" are interesting because it's an odd number of strokes you play. 
            Important to note is that as soon as "Triolen" are in a segment you have to watch how you are coordinating your right and left hand 
            as you won't always end up on your left.
        `),
        new TutorialStep("Sechstolen", "basics2/Sechstolen", "basics2/Sechstolen", `
            "Sechstolen" are twice as fast and twice as cool as "Triolen". Fortunately six is an even number. 
            Thus you don't have to worry about your switching with hands.
        `)
    ]),
    new TutorialDetail("Combined Patterns", [
        new TutorialStep("Easy", "combined-patterns/Pattern-Einfach", "combined-patterns/Pattern-Einfach", `
            Here you can experience how much you've already learned. It's probably more than you thought. 
            The order of your hands in the picture is only a suggestion. For beginners it's recommended to follow it, 
            but as you get more familiar with everything you'll do it subconsciously and won't have to worry about it anymore.
        `),
        new TutorialStep("Intermediate", "combined-patterns/Pattern-Mittel", "combined-patterns/Pattern-Mittel", `
            Another one!
        `),
        new TutorialStep("Advanced", "combined-patterns/Pattern-Schwer", "combined-patterns/Pattern-Schwer", `
            Here you can see the trouble which can be caused by "Triolen". Again the order is only a suggestion and if you feel 
            comfortable enough you can choose an order that fits you most.
        `)
    ]),
    new TutorialDetail("Drum Rolls", [
        new TutorialStep("Seperate Drum Rolls", "drum-rolls/Wirbel-Einzeln", "drum-rolls/Wirbel-Einzeln", `
            Drum Rolls is something that you can't expect to master instantly. You have to practice a lot. 
            But here's how it goes: You have to hold your drum stick only with your thumb and index finger. And then hit the drum and watch it bounce.
        `, "other/DrumRoll.gif"),
        new TutorialStep("Joint Drum Rolls", "drum-rolls/Wirbel-Gebunden", "drum-rolls/Wirbel-Gebunden", `
            As you get more used to it you can join the Drum Rolls together. With more experience your individual strokes will eventually merge together.
        `),
        new TutorialStep("Presswirbel", "drum-rolls/Presswirbel", "drum-rolls/Wirbel-Einzeln", `
            You can ajust the roughness of the Drum Roll by pinching your thumb and index finger together. Try to combine those with the other stuff you learned!
        `),
    ]),
    new TutorialDetail("Ghost Notes", [
        new TutorialStep("Ghost Note Down", "ghost-notes/Ghost-Note-Down", "ghost-notes/Ghost-Notes", `
            The magic behind Ghost Notes is that (if executed perfectly) you won't hear them. But if left out you will definitly recognise the change. 
            Good examples of using Ghost Notes are "Californication ~ Red Hot Chilli Peppers" or "When the Levee Breakes ~ Led Zeppelin".
        `),
        new TutorialStep("Ghost Note Up", "ghost-notes/Ghost-Note-Up", "ghost-notes/Ghost-Notes", "")
    ]),
];
