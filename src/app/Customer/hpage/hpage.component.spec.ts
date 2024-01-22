import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpageComponent } from './hpage.component';

describe('HpageComponent', () => {
  let component: HpageComponent;
  let fixture: ComponentFixture<HpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
