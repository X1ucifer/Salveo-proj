import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateWellnessComponent } from './corporate-wellness.component';

describe('CorporateWellnessComponent', () => {
  let component: CorporateWellnessComponent;
  let fixture: ComponentFixture<CorporateWellnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateWellnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
