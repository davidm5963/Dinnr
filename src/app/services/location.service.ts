import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { 
  }

  getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       return { lat: position.coords.latitude, lng: position.coords.longitude };
     });
   }
 }
}
