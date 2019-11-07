import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ChoiseCityComponent } from './weather/choise-city/choise-city.component';
import { FormsModule } from '@angular/forms';
import { ResultWeatherComponent } from './weather/result-weather/result-weather.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ChoiseCityComponent,
    ResultWeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
