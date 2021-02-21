import {Chapter} from "./chapter";

export class Book {
    constructor(public bookId: string,
                public chapters: Chapter[]) {
    }
}