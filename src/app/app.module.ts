import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { DislikeListComponent } from './components/dislike-list/dislike-list.component';
import { LikeListComponent } from './components/like-list/like-list.component';
import { RestaurantCardListComponent } from './components/restaurant-card-list/restaurant-card-list.component';

import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

import { LocationService } from './services/location.service';
import { RestaurantService } from './services/restaurant.service';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    DislikeListComponent,
    LikeListComponent,
    RestaurantCardListComponent,
    
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_API_KEY
    })
  ],
  providers: [
    LocationService,
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
