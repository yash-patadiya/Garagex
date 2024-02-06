import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GProfileComponent } from './gprofile.component';

describe('GProfileComponent', () => {
  let component: GProfileComponent;
  let fixture: ComponentFixture<GProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
