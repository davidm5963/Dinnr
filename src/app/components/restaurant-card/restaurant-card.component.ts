import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model'
import { MatCard } from "@angular/material/card"

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Restaurant;


  constructor() { }

  ngOnInit(restaurant = this.restaurant) {
  }

}
