import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecastData : any[] = [];

  constructor(private forecastService: ForecastService) {
    forecastService.getForecast().subscribe(res => {
      this.forecastData = res;
    });
  }

  ngOnInit(): void {
  }

}
