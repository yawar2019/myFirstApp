import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAndLocalStorageExample } from './session-and-local-storage-example';

describe('SessionAndLocalStorageExample', () => {
  let component: SessionAndLocalStorageExample;
  let fixture: ComponentFixture<SessionAndLocalStorageExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionAndLocalStorageExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionAndLocalStorageExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
