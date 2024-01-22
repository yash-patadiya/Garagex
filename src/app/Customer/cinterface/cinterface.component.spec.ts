import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInterfaceComponent } from './cinterface.component';

describe('CInterfaceComponent', () => {
  let component: CInterfaceComponent;
  let fixture: ComponentFixture<CInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
