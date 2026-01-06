import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDefferd } from './footer-defferd';

describe('FooterDefferd', () => {
  let component: FooterDefferd;
  let fixture: ComponentFixture<FooterDefferd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDefferd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDefferd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
