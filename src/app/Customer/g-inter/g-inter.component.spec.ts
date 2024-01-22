import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GInterComponent } from './g-inter.component';

describe('GInterComponent', () => {
  let component: GInterComponent;
  let fixture: ComponentFixture<GInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GInterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
