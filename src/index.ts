import {PowerPointService} from "./services/powerPointService";
import {BibleService} from "./services/bibleService";
import {BookNameToIdMap} from "./constants";
import {Passage} from "./models/passage";

const verses: string[] = [];

function main() {
    console.log("hello word");

    const powerPointService = new PowerPointService()
    const bibleService = new BibleService()
    bibleService.fetchPassage(BookNameToIdMap.nameToId.Genesis, 1)
        .subscribe((passage: Passage) => {
            powerPointService.buildPowerPoint(passage);
        });
}

main();

