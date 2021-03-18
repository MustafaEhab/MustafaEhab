import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationRegisterationComponent } from './accommodation-registeration.component';

describe('AccommodationRegisterationComponent', () => {
  let component: AccommodationRegisterationComponent;
  let fixture: ComponentFixture<AccommodationRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationRegisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
