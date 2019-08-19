import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  location = { cityId: '5506956'};
  weather = undefined;

  constructor(private weatherService: WeatherService){
  }

  ngOnInit(){
    this.getWeather(this.location.cityId);
  }


  getWeather(countryId: string) {
    this.weatherService
      .getWeather(countryId)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(countryId: HTMLInputElement) {
    if (countryId.value) {
      this.getWeather(countryId.value);
      countryId.value = '';
      
    } else {
      alert('Please. Insert some values');
    }
    return false;
  }

}
