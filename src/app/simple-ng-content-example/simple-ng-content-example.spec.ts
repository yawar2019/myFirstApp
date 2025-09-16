import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgContentExample } from './simple-ng-content-example';

describe('SimpleNgContentExample', () => {
  let component: SimpleNgContentExample;
  let fixture: ComponentFixture<SimpleNgContentExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleNgContentExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleNgContentExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
