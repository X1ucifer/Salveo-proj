import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedoctorsComponent } from './createdoctors.component';

describe('CreatedoctorsComponent', () => {
  let component: CreatedoctorsComponent;
  let fixture: ComponentFixture<CreatedoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
