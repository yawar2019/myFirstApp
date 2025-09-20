import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalGetCounter } from './signal-get-counter';

describe('SignalGetCounter', () => {
  let component: SignalGetCounter;
  let fixture: ComponentFixture<SignalGetCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalGetCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalGetCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
