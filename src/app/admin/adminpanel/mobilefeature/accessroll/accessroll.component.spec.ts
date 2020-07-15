import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessrollComponent } from './accessroll.component';

describe('AccessrollComponent', () => {
  let component: AccessrollComponent;
  let fixture: ComponentFixture<AccessrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
