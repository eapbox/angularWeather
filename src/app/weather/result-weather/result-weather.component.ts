import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-weather',
  templateUrl: './result-weather.component.html',
  styleUrls: ['./result-weather.component.css']
})
export class ResultWeatherComponent implements OnInit {
  @Input() currentCityWeather: any;
  @Input() isLoading: boolean;

  private curentDate: Date;
  private weatherIcon;

  private textWaiting = 'Загрузка погоды, ожидайте...';

  constructor() { }

  ngOnInit() {
    this.curentDate = new Date();
  }

}
