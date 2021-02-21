import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ApiConstants} from "../../privateKeys/apiConstants";
import {UrlService} from "./urlService";
import {from, Observable} from "rxjs";
import {Verse} from "../models/verse";
import {map} from "rxjs/operators";
import {PassageConversions} from "../conversions/passageConversions";
import {Passage} from "../models/passage";
import {PassageDTO} from "../conversions/passageDTO";

export class BibleService {

    constructor() {
    }

    public fetchPassage(bookId: string, chapter: number): Observable<Passage> {
        const url = UrlService.getChapter(bookId, chapter);
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

        return from(axios(clientServerOptions)).pipe(
            map(response => {
                return PassageConversions.fromPassageDTO(response.data.data as PassageDTO);
            })
        );
    }

}