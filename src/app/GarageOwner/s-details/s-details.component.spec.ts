import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDetailsComponent } from './s-details.component';

describe('SDetailsComponent', () => {
  let component: SDetailsComponent;
  let fixture: ComponentFixture<SDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
