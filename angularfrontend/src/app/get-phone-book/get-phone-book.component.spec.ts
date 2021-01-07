import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPhoneBookComponent } from './get-phone-book.component';

describe('GetPhoneBookComponent', () => {
  let component: GetPhoneBookComponent;
  let fixture: ComponentFixture<GetPhoneBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPhoneBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
