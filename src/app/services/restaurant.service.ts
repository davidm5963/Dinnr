import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private API_KEY: string = environment.GOOGLE_API_KEY;
  private API_URL: string = environment.GOOGLE_PLACES_API_URL;

  constructor(private http: Http) { }

  getNearbyRestaurants(location: any){
    this.http.get(this.API_URL+`&location=${location.lat},${location.lng}j`).pipe(
      map(result => result.json())
    )
  }
}
