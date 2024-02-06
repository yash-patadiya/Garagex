import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACustomerComponent } from './acustomer.component';

describe('ACustomerComponent', () => {
  let component: ACustomerComponent;
  let fixture: ComponentFixture<ACustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
