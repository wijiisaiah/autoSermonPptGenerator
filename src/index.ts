import {PowerPointService} from "./services/powerPointService";
import {BibleService} from "./services/bibleService";

const verses: string[] = [];

function main() {
    console.log("hello word");

    const powerPointService = new PowerPointService()
    const bibleService = new BibleService()
    bibleService.fetchBibleVerse("");
    // powerPointService.buildPowerPoint();
}

main();

