import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiserviceComponent } from './liservice.component';

describe('LiserviceComponent', () => {
  let component: LiserviceComponent;
  let fixture: ComponentFixture<LiserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
