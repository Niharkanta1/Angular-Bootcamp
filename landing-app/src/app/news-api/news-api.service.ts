import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, pluck, switchMap, tap } from 'rxjs';

export interface NewsApiResponse {
  totalResults: number;
  articles: Article[];
}

export interface Article {
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = 'fa9e17f42a1a4c0190c6288510f7c1b2';
  private country = 'in';

  private pagesInput : Subject<number> = new Subject();
  pagesOutput : Observable<Article[]>;
  numberOfPages : Subject<number> = new Subject();

  constructor(private http: HttpClient) {
    this.pagesOutput = this.pagesInput.pipe(
      map((page) => {
        return new HttpParams()
          .set('apiKey', this.apiKey)
          .set('country', this.country)
          .set('pageSize', this.pageSize)
          .set('page', page)
      }),
      switchMap((params) => {
        return this.http.get<NewsApiResponse>(this.url, { params })
      }),
      tap(response => {
        const totalPages = Math.ceil(response.totalResults / this.pageSize);
        this.numberOfPages.next(totalPages);
      }),
      map(result => result?.articles)
    );
  }

  getPage(page: number) {
    this.pagesInput.next(page);
  }
}
