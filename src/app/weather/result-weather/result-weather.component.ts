import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../service/weather-api.service';

@Component({
  selector: 'app-result-weather',
  templateUrl: './result-weather.component.html',
  styleUrls: ['./result-weather.component.css']
})
export class ResultWeatherComponent implements OnInit {
  @Input() currentCityWeather: Weather;
  @Input() isLoading: boolean;

  private curentDate: Date;

  private textWaiting = 'Загрузка погоды, ожидайте...';

  constructor() { }

  ngOnInit() {
    this.curentDate = new Date();
  }

}
