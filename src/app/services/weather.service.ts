import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = "4832064e571f3cef00dc6fb46e433663";
  URI: string = '';

  constructor(private http: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&id=`;

  }
  getWeather(countryId: string){
        return this.http.get(`${this.URI}${countryId}`);
  }
}
