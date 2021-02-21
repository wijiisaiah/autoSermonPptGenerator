import {Verse} from "./verse";

export class Chapter {
    constructor(public verses: Map<number, Verse>,
                public num: number) {
    }
}