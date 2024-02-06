import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAppointmentComponent } from './gappointment.component';

describe('GAppointmentComponent', () => {
  let component: GAppointmentComponent;
  let fixture: ComponentFixture<GAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
