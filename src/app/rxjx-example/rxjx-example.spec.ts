import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjxExample } from './rxjx-example';

describe('RxjxExample', () => {
  let component: RxjxExample;
  let fixture: ComponentFixture<RxjxExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjxExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjxExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
