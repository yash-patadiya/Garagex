import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GEditProfileComponent } from './gedit-profile.component';

describe('GEditProfileComponent', () => {
  let component: GEditProfileComponent;
  let fixture: ComponentFixture<GEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
