import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusercreateComponent } from './adminusercreate.component';

describe('AdminusercreateComponent', () => {
  let component: AdminusercreateComponent;
  let fixture: ComponentFixture<AdminusercreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminusercreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
