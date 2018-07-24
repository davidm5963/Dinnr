import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model'
import { MatCard } from "@angular/material/card"
import { RestaurantService } from '../../services/restaurant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Restaurant;
  images: any[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(restaurant = this.restaurant) {
    //this.restaurantService.getRestaurantImages(this.restaurant).subscribe(data => {
     // this.images = data;
      this.images = ['https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1519844002%2Ffast-food-mobile-apps-chick-fil-a-FT-BLOG0218.jpg%3Fitok%3D7d_gu0JA&w=700&q=85',
                     'https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg']
      console.log(this.images);
    //});
  }

}
