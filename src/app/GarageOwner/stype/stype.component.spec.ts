import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StypeComponent } from './stype.component';

describe('StypeComponent', () => {
  let component: StypeComponent;
  let fixture: ComponentFixture<StypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
