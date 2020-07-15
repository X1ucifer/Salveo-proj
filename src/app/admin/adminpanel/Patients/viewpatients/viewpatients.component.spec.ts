import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientsComponent } from './viewpatients.component';

describe('ViewpatientsComponent', () => {
  let component: ViewpatientsComponent;
  let fixture: ComponentFixture<ViewpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
