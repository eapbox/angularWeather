import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityListService {

  constructor() { }

  private data = [
    { name: 'Минск',   cityID: '625144' },
    { name: 'Гомель',  cityID: '627907' },
    { name: 'Брест',   cityID: '629634' },
    { name: 'Гродно',  cityID: '627904' },
    { name: 'Витебск', cityID: '620127' },
    { name: 'Могилев', cityID: '625665' },
  ];
  public getData() {
    return this.data;
  }
}
