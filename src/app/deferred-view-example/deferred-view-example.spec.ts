import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredViewExample } from './deferred-view-example';

describe('DeferredViewExample', () => {
  let component: DeferredViewExample;
  let fixture: ComponentFixture<DeferredViewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredViewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferredViewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
