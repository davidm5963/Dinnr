import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private API_KEY: string = environment.GOOGLE_API_KEY;
  private API_URL: string = environment.GOOGLE_PLACES_API_URL;

  constructor() { }

  getNearbyRestaurants(){

  }
}
