import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { LikeListComponent } from './components/like-list/like-list.component';
import { RestaurantCardListComponent } from './components/restaurant-card-list/restaurant-card-list.component';

import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

import { LocationService } from './services/location.service';
import { RestaurantService } from './services/restaurant.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { SwingModule } from 'angular2-swing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import * as firebase from 'firebase/app';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    LikeListComponent,
    RestaurantCardListComponent,
    
  ],
  imports: [
    BrowserAnimationsModule
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google.GOOGLE_API_KEY
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SwingModule,
    MatCardModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    LocationService,
    RestaurantService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
