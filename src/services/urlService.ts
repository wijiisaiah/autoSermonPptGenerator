import {BibleIDs, BookNameToIdMap, CommonURLs} from "../constants";
import * as Url from "url";

export class UrlService {
    public static getWorldEnglishBibleURL(): string {
        const webBibleURL = UrlService.toIdUrl(BibleIDs.worldEnglishBibleProtestantId);
        return CommonURLs.baseScriptureApiURL + CommonURLs.bibleURL + webBibleURL;
    }

    public static getChapter(bookId: string, chapter: number): string {
        const bookAndChapterId = bookId + '.' + chapter;
        return UrlService.getWorldEnglishBibleURL() + CommonURLs.passageURL + UrlService.toIdUrl(bookAndChapterId);
    }


    public static toIdUrl(id: string) {
        return '/' + id;
    }

    public static setParams(url: string, contentType: string) {
        return url + '?' + 'content-type=' + contentType;
    }

}