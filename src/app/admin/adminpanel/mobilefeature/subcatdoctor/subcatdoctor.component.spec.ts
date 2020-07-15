import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatdoctorComponent } from './subcatdoctor.component';

describe('SubcatdoctorComponent', () => {
  let component: SubcatdoctorComponent;
  let fixture: ComponentFixture<SubcatdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
