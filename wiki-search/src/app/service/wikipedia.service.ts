import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs';

export interface WikipediaResponse {
  query: {
    searchinfo: {
      totalhits: number
    },
    search: {
      title: string,
      pageid: number,
      snippet: string
    }[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(key: string) {
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: key,
        origin: '*'
      }
    }).pipe(
      map(value => value?.query?.search)
    );
  }
}
