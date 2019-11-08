import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-choise-city',
  templateUrl: './choise-city.component.html',
  styleUrls: ['./choise-city.component.css']
})
export class ChoiseCityComponent implements OnInit {
  @Input() cityList: any[];
  @Output()  choiceCityEvent = new EventEmitter<any>();

  textEmptyCityList = 'Список городов пуст';
  selectedCity: any; // текущий выбранный элемент списка (город)

  constructor() { }

  ngOnInit() {
  }

  onSelectCity(city) {
    this.selectedCity = city;
    this.choiceCityEvent.emit(city);
  }
}
