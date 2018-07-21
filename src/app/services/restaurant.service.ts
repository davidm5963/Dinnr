import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private API_KEY: string = environment.ZOMATO_API_KEY;
  private API_URL: string = environment.ZOMATO_API_URL;

  constructor(private http: HttpClient) { 
  }

  getNearbyRestaurants(lat: number, lng: number){

    let headers = new HttpHeaders().append('user-key',  this.API_KEY);    

    return this.http.get<Restaurant[]>(this.API_URL+`&start=20&lat=${lat}&lon=${lng}&radius=100000`, {headers: headers});
    }
}
