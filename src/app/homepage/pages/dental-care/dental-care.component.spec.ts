import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalCareComponent } from './dental-care.component';

describe('DentalCareComponent', () => {
  let component: DentalCareComponent;
  let fixture: ComponentFixture<DentalCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
