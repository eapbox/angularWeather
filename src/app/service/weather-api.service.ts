import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/internal/operators';

export interface Weather {
  description: string;   // описание погоды
  weatherIcon: string;   // ссылка на иконку погоды
  temp: string;          // текущая температура
  temp_max: string;      // максимальная температура
  temp_min: string;      // минимальная температура
  windSpeed: string;     // скорость ветра
}


@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private baseURL = 'https://api.openweathermap.org/data/2.5/weather?id=';
  private weatherIconURL = 'http://openweathermap.org/img/w/';
  private apiKey = '&units=metric&lang=ru&appid=' + '5460396124d03105c9daf93bcc5f456a';

  constructor(
    private http: HttpClient
  ) { }

  // в этом методе мы получаем погоду от вешнего сервера
  // и чтобы не привязываться к конкретному сервису, мы возвращаем ответ в формате Weather
  public getWeather(cityID: string): Promise<Weather> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseURL + cityID + this.apiKey)
        .pipe(delay(500))
        .subscribe(
        (data: any) => {
          resolve({
            description: data.weather[0].description,
            weatherIcon: this.weatherIconURL + data.weather[0].icon + '.png',
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            windSpeed: data.wind.speed,
          });
        },
        error => reject(error)
        );
    });
  }
}
