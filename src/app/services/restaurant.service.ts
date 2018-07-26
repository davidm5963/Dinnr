
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Restaurant } from '../models/restaurant.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, merge, from } from 'rxjs';
import { combineLatest } from 'rxjs/operators'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private API_KEY: string = environment.zomato.ZOMATO_API_KEY;
  private API_URL: string = environment.zomato.ZOMATO_API_URL;
  private GOOGLE_API_KEY: string = environment.google.GOOGLE_API_KEY;
  private SEARCH_ENGINE_KEY: string = environment.google.CUSTOM_SEARCH_ENGINE_KEY;

  likes: AngularFirestoreCollection<string>; 

  constructor(private http: HttpClient, private afs: AngularFirestore) { 
  }

  getNearbyRestaurants(lat: number, lng: number){

    let headers = new HttpHeaders().append('user-key',  this.API_KEY);    

    return this.http.get<Restaurant[]>(this.API_URL+`&start=50&count=2&lat=${lat}&lon=${lng}&radius=100000`, {headers: headers});
  }

  getRestaurantImages(restaurant: Restaurant){
    return this.http.get<any[]>(`https://www.googleapis.com/customsearch/v1?q=${restaurant.name}&cx=${this.SEARCH_ENGINE_KEY}&num=2&searchType=image&key=${this.GOOGLE_API_KEY}`);
  }

  addToLikes(restaurantId: string){
    console.log(restaurantId)
      this.afs.collection("likes").doc(restaurantId).set({restaurantId: restaurantId});
  }

  getLikes(){   
    return this.likes = this.afs.collection('likes', ref => ref.orderBy('restaurantId'));  
   }
 
   getRestaurantDetails(restaurantId: string){
     let headers = new HttpHeaders().append('user-key',  this.API_KEY);        
     console.log(this.http.get<Restaurant>(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}`, {headers: headers}));    
     return (this.http.get<Restaurant>(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}`, {headers: headers}));    
     
   }
}
