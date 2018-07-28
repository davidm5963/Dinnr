import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.css']
})
export class LikeListComponent implements OnInit {

  likes: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.likes = this.restaurantService.getLikes().valueChanges()
    this.restaurantService.getLikes().valueChanges().subscribe(data => {
      console.log(data);
    })
    // .subscribe(restaurants => {
    //   restaurants.forEach(restId => {
    //     this.likes = this.restaurantService.getRestaurantDetails(restId['restaurantId']);
    //     this.likes.subscribe(data => {
    //       console.log(data)
    //       if(!this.likesArray.includes(data)){
    //         this.likesArray.push(data)
    //       }
    //     })
    //   })
    // })
  }

}
