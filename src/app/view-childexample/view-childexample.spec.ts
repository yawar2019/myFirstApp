import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildexample } from './view-childexample';

describe('ViewChildexample', () => {
  let component: ViewChildexample;
  let fixture: ComponentFixture<ViewChildexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildexample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
