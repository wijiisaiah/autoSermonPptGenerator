import {Book} from "./book";
import {Chapter} from "./chapter";
import {Verse} from "./verse";

export class Passage {

    constructor(public book: Book,
                public chapters: Chapter,
                public verses: Verse[]) {
    }

}