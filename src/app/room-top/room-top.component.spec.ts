import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTopComponent } from './room-top.component';

describe('RoomTopComponent', () => {
  let component: RoomTopComponent;
  let fixture: ComponentFixture<RoomTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
