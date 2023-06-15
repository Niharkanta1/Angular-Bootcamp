import { Component, OnInit } from '@angular/core';
import { Article, NewsApiService } from '../news-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-article-list',
  templateUrl: './news-article-list.component.html',
  styleUrls: ['./news-article-list.component.css']
})
export class NewsArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.pagesOutput.subscribe((atricles) => {
      this.articles = atricles;
    });
    this.newsApiService.getPage(1);
  }

  ngOnInit(): void {
  }

}
