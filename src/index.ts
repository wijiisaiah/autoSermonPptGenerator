import {PowerPointService} from "./services/powerPointService";
import {BibleService} from "./services/bibleService";
import {BookNameToIdMap} from "./constants";

const verses: string[] = [];

function main() {
    console.log("hello word");

    const powerPointService = new PowerPointService()
    const bibleService = new BibleService()
    bibleService.fetchBibleVerse(BookNameToIdMap.nameToId.Acts, 2);
    powerPointService.buildPowerPoint();
}

main();

