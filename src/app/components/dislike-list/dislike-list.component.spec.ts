import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeListComponent } from './dislike-list.component';

describe('DislikeListComponent', () => {
  let component: DislikeListComponent;
  let fixture: ComponentFixture<DislikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
