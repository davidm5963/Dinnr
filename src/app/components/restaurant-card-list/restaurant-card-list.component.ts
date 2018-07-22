import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';
import {
  Direction,
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'app-restaurant-card-list',
  templateUrl: './restaurant-card-list.component.html',
  styleUrls: ['./restaurant-card-list.component.css']
})
export class RestaurantCardListComponent implements OnInit, AfterViewInit {

    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('restaurantCards') swingCards: QueryList<SwingCardComponent>;
    restaurants: Array<any>;
    stackConfig: StackConfig;

    constructor(private locationService: LocationService, private restaurantService: RestaurantService) {
      
      this.stackConfig = {
        allowedDirections: [Direction.LEFT, Direction.RIGHT],
        // Now need to send offsetX and offsetY with element instead of just offset
        throwOutConfidence: (offsetX, offsetY, element) => {
          let throwPercentage = Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1), Math.abs(offsetY) / (element.offsetHeight / 1)), 1);
          console.log("THROW PERCECNTAGE: " + throwPercentage)
          return throwPercentage;
        },
        throwOutDistance: (d) => {
          return 1000;
        },
    }

    this.getRestaurants();
    
  }

  ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function
 
    console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards
 
    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    console.log(this.swingStack.stack);
 
    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    this.swingCards.forEach((c) => console.log(c.getCard()));
 
    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe(
      this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event)));
  }
 
  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
    //make element hidden once thrown out
    event.target.setAttribute("style", "visibility: hidden; transition: .2s; ");
  }
    
  ngOnInit() {
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
