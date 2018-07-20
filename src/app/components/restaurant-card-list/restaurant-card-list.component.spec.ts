import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCardListComponent } from './restaurant-card-list.component';

describe('RestaurantCardListComponent', () => {
  let component: RestaurantCardListComponent;
  let fixture: ComponentFixture<RestaurantCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
