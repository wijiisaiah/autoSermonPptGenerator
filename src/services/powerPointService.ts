import pptxgen from "pptxgenjs";
import {Passage} from "../models/passage";
import {Verse} from "../models/verse";

export class PowerPointService {

    public buildPowerPoint(passage: Passage): void {
        // 1. Create a new Presentation
        const pres = new pptxgen();
        const chunkedVerses: Verse[][] = passage.chunkVerses(2);

        chunkedVerses.forEach((setOfVerses: Verse[]) => {
            const slide = pres.addSlide();
            let textboxText = "";
            setOfVerses.forEach((verse) => {
                textboxText += verse.verseNumber + " " + verse.text;
            });
            const textboxOpts = {x: 1, y: 1, color: 'ffffff', fill: {color: 'F1F1F1'}, align: pres.AlignH.center};
            slide.addText(textboxText, textboxOpts);
            slide.background = {fill: "000000"};
        })


        pres.writeFile("Sample Presentation.pptx");
    }
}
