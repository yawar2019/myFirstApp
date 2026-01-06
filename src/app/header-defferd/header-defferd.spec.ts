import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDefferd } from './header-defferd';

describe('HeaderDefferd', () => {
  let component: HeaderDefferd;
  let fixture: ComponentFixture<HeaderDefferd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDefferd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDefferd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
