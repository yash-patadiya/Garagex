import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GContactComponent } from './gcontact.component';

describe('GContactComponent', () => {
  let component: GContactComponent;
  let fixture: ComponentFixture<GContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
