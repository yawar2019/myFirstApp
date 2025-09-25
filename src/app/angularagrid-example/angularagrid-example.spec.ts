import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularagridExample } from './angularagrid-example';

describe('AngularagridExample', () => {
  let component: AngularagridExample;
  let fixture: ComponentFixture<AngularagridExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularagridExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularagridExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
