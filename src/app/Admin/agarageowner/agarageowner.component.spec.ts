import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGarageownerComponent } from './agarageowner.component';

describe('AGarageownerComponent', () => {
  let component: AGarageownerComponent;
  let fixture: ComponentFixture<AGarageownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AGarageownerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AGarageownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
