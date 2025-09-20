import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalexample } from './signalexample';

describe('Signalexample', () => {
  let component: Signalexample;
  let fixture: ComponentFixture<Signalexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalexample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
