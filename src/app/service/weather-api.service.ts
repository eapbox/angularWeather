import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private baseURL = 'http://api.openweathermap.org/data/2.5/weather?id=';
  private weatherIconURL = 'http://openweathermap.org/img/w/';
  private apiKey = '&units=metric&lang=ru&appid=' + '5460396124d03105c9daf93bcc5f456a';

  constructor(
    private http: HttpClient
  ) { }

  public getWeather(cityID: string) {
    return new Promise((resolve, reject) => {
      this.http.get(
        this.baseURL + cityID + this.apiKey,
        {
          headers: [
            {
              'Content-Security-Policy': 'default-src \'self\'; script-src https://static.ads-twitter.com https://www.google-analytics.com; img-src \'self\' https://s3.amazonaws.com https://twitter.com https://pbs.twimg.com; font-src \'self\' https://fonts.gstatic.com; style-src \'self\' http://api.openweathermap.org; frame-ancestors \'none\';'
            }
          ]
        }
      ).subscribe(
        (data:any) => {
          data.weatherIcon = this.weatherIconURL + data.weather[0].icon + '.png';

          resolve(data);
        },
        error => reject(error)
        );
    });
  }
}
