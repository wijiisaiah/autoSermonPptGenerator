import {Chapter} from "./chapter";

export class Book {
    constructor(public chapters: Map<number, Chapter[]>,
                public bookId: string) {
    }
}