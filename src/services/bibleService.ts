import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ApiConstants} from "../../privateKeys/apiConstants";
import {Constants} from "../constants";

export class BibleService {

    constructor() {
    }

    public fetchBibleVerse(verse: string): void {
        const baseURL = "https://api.scripture.api.bible/";
        const bibleURL = "v1/bibles";

        const clientServerOptions: AxiosRequestConfig = {
            url: baseURL + bibleURL,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-key': ApiConstants.bibleKey
            },
            responseType: 'json'
        }

        axios(clientServerOptions).then((response: AxiosResponse<any>) => {
            const worldEnglishProtestantBible = response.data.data.filter((bibleInfo: any) => {
               return bibleInfo.id === Constants.worldEnglishBibleProestantId;
            });
            console.log(worldEnglishProtestantBible);
        });


    }

}