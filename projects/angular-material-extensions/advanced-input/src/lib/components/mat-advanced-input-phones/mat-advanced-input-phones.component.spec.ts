import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAdvancedInputPhonesComponent } from './mat-advanced-input-phones.component';

describe('MatAdvancedInputPhonesComponent', () => {
  let component: MatAdvancedInputPhonesComponent;
  let fixture: ComponentFixture<MatAdvancedInputPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatAdvancedInputPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAdvancedInputPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
