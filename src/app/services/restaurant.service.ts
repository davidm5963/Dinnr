
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Restaurant } from '../models/restaurant.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private API_KEY: string = environment.zomato.ZOMATO_API_KEY;
  private API_URL: string = environment.zomato.ZOMATO_API_URL;
  

  constructor(private http: HttpClient, private afs: AngularFirestore) { 
  }

  getNearbyRestaurants(lat: number, lng: number){

    let headers = new HttpHeaders().append('user-key',  this.API_KEY);    

    return this.http.get<Restaurant[]>(this.API_URL+`&start=60&lat=${lat}&lon=${lng}&radius=100000`, {headers: headers});
  }

  getRestaurantImages(restaurant: Restaurant){

    return this.http.get<any[]>('https://www.googleapis.com/customsearch/v1?q=swensons&cx=015166106935496837655%3A1lg9i5pxeb0&num=3&searchType=image&key=AIzaSyAG_-f5e0-q6QzlkASMKYINbLmo_NhPS2Q');
  }
}
