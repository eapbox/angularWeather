import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../../service/city-list.service';

@Component({
  selector: 'app-choise-city',
  templateUrl: './choise-city.component.html',
  styleUrls: ['./choise-city.component.css']
})
export class ChoiseCityComponent implements OnInit {
  @Input() cityList: City[];
  @Output()  choiceCityEvent = new EventEmitter<any>();

  textEmptyCityList = 'Список городов пуст';
  selectedCity: City; // текущий выбранный элемент списка (город)

  constructor() { }

  ngOnInit() {
  }

  onSelectCity(city) {
    this.selectedCity = city;
    this.choiceCityEvent.emit(city);
  }
}
