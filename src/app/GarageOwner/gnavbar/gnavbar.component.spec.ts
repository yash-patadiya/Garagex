import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnavbarComponent } from './gnavbar.component';

describe('GnavbarComponent', () => {
  let component: GnavbarComponent;
  let fixture: ComponentFixture<GnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
