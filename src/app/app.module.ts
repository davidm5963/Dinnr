import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { DislikeListComponent } from './components/dislike-list/dislike-list.component';
import { LikeListComponent } from './components/like-list/like-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    LikesListComponent,
    DislikeListComponent,
    LikeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
