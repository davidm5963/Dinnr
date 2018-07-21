import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-card-list',
  templateUrl: './restaurant-card-list.component.html',
  styleUrls: ['./restaurant-card-list.component.css']
})
export class RestaurantCardListComponent implements OnInit {

    constructor(private locationService: LocationService, private restaurantService: RestaurantService) {}

    restaurants: Restaurant[];

    ngOnInit() {
      this.getRestaurants();
    }

   private getRestaurants(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
      this.restaurantService.getNearbyRestaurants(position.coords.latitude, position.coords.longitude).subscribe(data => {
        this.restaurants = data['restaurants'];
        console.log(data['restaurants'])
      })      
   })
  }
}

}
