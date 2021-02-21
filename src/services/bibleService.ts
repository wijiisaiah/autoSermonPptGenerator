import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ApiConstants} from "../../privateKeys/apiConstants";
import {UrlService} from "./urlService";
import {from, Observable} from "rxjs";
import {Verse} from "../models/verse";
import {map} from "rxjs/operators";

export class BibleService {

    constructor() {
    }

    public fetchBibleVerse(bookId: string, chapter: number): Observable<Verse> {
        const url = UrlService.getChapter(bookId, chapter) ;
        const urlWithParams = UrlService.setParams(url, 'json');
        const clientServerOptions: AxiosRequestConfig = {
            url: urlWithParams,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-key': ApiConstants.bibleKey
            },
            responseType: 'json'
        }

        from(axios(clientServerOptions)).pipe(map(response => {
            response.
        }));


    }

}