import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalGetCounterEx2 } from './signal-get-counter-ex2';

describe('SignalGetCounterEx2', () => {
  let component: SignalGetCounterEx2;
  let fixture: ComponentFixture<SignalGetCounterEx2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalGetCounterEx2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalGetCounterEx2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
