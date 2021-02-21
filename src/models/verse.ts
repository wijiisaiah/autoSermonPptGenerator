export class Verse {
    public verseNumber: number;
    public verseChapter: number;
    public verseBookId: string

    constructor(public readonly text: string,
                public readonly verseId: string) {

        const splitVerseId = verseId.split('.');
        this.verseBookId = splitVerseId[0];
        this.verseChapter = +splitVerseId[1];
        this.verseNumber = +splitVerseId[2];
    }
}