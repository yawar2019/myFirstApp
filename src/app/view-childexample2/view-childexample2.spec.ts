import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildexample2 } from './view-childexample2';

describe('ViewChildexample2', () => {
  let component: ViewChildexample2;
  let fixture: ComponentFixture<ViewChildexample2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildexample2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildexample2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
