import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipeexanple } from './pipeexanple';

describe('Pipeexanple', () => {
  let component: Pipeexanple;
  let fixture: ComponentFixture<Pipeexanple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipeexanple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipeexanple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
