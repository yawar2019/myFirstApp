import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDefferd } from './body-defferd';

describe('BodyDefferd', () => {
  let component: BodyDefferd;
  let fixture: ComponentFixture<BodyDefferd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyDefferd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyDefferd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
