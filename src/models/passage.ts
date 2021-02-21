import {Book} from "./book";
import {Chapter} from "./chapter";
import {Verse} from "./verse";

export class Passage {

    constructor(public verses: Verse[]) {
    }

    public chunkVerses(chunkSize: number): Verse[][] {
        const tempArray: Verse[][] = [];
        for (let i = 0, j = this.verses.length; i < j; i += chunkSize) {
            tempArray.push(this.verses.slice(i, i + chunkSize));
        }
        return tempArray;
    }

}