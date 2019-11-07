import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-weather',
  templateUrl: './result-weather.component.html',
  styleUrls: ['./result-weather.component.css']
})
export class ResultWeatherComponent implements OnInit {
  @Input() currentCityWeather: any;

  private curentDate: Date;
  private weatherIcon;

  constructor() { }

  ngOnInit() {
    this.curentDate = new Date();
  }

}
