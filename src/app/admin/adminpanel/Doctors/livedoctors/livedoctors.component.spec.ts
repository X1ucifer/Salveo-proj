import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivedoctorsComponent } from './livedoctors.component';

describe('LivedoctorsComponent', () => {
  let component: LivedoctorsComponent;
  let fixture: ComponentFixture<LivedoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivedoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
