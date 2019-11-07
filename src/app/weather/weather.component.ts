import { Component, OnInit } from '@angular/core';
import { CityListService } from '../service/city-list.service';
import {WeatherApiService} from "../service/weather-api.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  cityList: any[] = [];
  currentCityWeather: any;

  constructor(
    private cityService: CityListService,
    private weatherService: WeatherApiService
  ) { }

  ngOnInit() {
    this.cityList = this.cityService.getData();  // получить список городов
  }

  // Получили сообщение что выбрали желаемый город-------
  receiveSelectedCity(city) {
    this.currentCityWeather = null;
    this.weatherService.getWeather(city.cityID).then(
      data => {
        this.currentCityWeather = data;
        console.log(JSON.stringify(this.currentCityWeather));
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }
  // ----------------------------------------------------
}
