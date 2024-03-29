import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, mergeMap, of, pluck, retry, share, switchMap, tap, throwError, toArray } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NotificationsService } from '../notifications/notifications.service';

interface OpenWeatherResponse {
  list: {
    dt_txt: string,
    main: {
      temp: number
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient, private notificationsService: NotificationsService) { }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (pos) => {
          observer.next(pos.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      );
    }).pipe(
      retry(1),
      tap(() => {
        this.notificationsService.addSuccess("Got your location")
      }),
      catchError(err => {
        this.notificationsService.addError("Failed to get your location");
        return of(new GeolocationCoordinates());
      })
    );
  }

  getForecast() {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
        .set('lat', String(coords.latitude))
        .set('lon', String(coords.longitude))
        .set('units', 'metric')
        .set('appid', '844a65d2acc5ffb161e662d8c8123f77')
      }),
      switchMap(params => this.http.get<OpenWeatherResponse>(this.url, {params})),
      map(res => res?.list),
      mergeMap(value => of(...value)),
      filter((value, index) => index % 8 === 0),
      map(value => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp
        }
      }),
      toArray(),
      share(),
      catchError(err => {
        this.notificationsService.addError("Not able to fetch weather forecast")
        return of([{dateString: '',temp: 0}])
      })
    );
  }


}
