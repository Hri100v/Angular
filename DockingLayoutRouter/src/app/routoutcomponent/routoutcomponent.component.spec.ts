import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutoutcomponentComponent } from './routoutcomponent.component';

describe('RoutoutcomponentComponent', () => {
  let component: RoutoutcomponentComponent;
  let fixture: ComponentFixture<RoutoutcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutoutcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutoutcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
