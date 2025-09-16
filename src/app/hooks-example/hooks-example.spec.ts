import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksExample } from './hooks-example';

describe('HooksExample', () => {
  let component: HooksExample;
  let fixture: ComponentFixture<HooksExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
