import {Passage} from "../models/passage";
import {Verse} from "../models/verse";
import {ItemDTO, PassageDTO} from "./passageDTO";

export class PassageConversions {
    public static fromPassageDTO(passageData: PassageDTO): Passage {
        const verses = PassageConversions.parseVerses(passageData);
        return new Passage(verses);
    }

    public static parseVerses(passageData: PassageDTO): Verse[] {
        const allVerses: Verse[] = [];
        passageData.content.forEach((item: ItemDTO) => {
            if (item.items) {
                const verses = item.items.filter((verse: any) => {
                    return verse.type === 'text';
                });
                verses.forEach((verseDTO: any) => {
                    const verse = new Verse(verseDTO.text, verseDTO.attrs.verseId);
                    allVerses.push(verse);
                });
            } else {
                return [];
            }
        });

        return allVerses;
    }
}