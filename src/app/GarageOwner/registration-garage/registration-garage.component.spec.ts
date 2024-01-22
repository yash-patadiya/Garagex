import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGarageComponent } from './registration-garage.component';

describe('RegistrationGarageComponent', () => {
  let component: RegistrationGarageComponent;
  let fixture: ComponentFixture<RegistrationGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationGarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
