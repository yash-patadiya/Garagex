import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEditProfileComponent } from './aedit-profile.component';

describe('AEditProfileComponent', () => {
  let component: AEditProfileComponent;
  let fixture: ComponentFixture<AEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
