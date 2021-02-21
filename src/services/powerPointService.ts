import pptxgen from "pptxgenjs";

export class PowerPointService {

    public buildPowerPoint(passages: Passage[]): void {
        // 1. Create a new Presentation
        const pres = new pptxgen();

// 2. Add a Slide
        const slide = pres.addSlide();

// 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
        const textboxText = "Hello World from PptxGenJS!";
        const textboxOpts = {x: 1, y: 1, color: '363636', fill: {color: 'F1F1F1'}, align: pres.AlignH.center};
        slide.addText(textboxText, textboxOpts);

// 4. Save the Presentation
        pres.writeFile("Sample Presentation.pptx");
    }
}
