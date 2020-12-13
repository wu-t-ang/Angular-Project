import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopRoomsComponent } from './list-top-rooms.component';

describe('ListTopRoomsComponent', () => {
  let component: ListTopRoomsComponent;
  let fixture: ComponentFixture<ListTopRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
