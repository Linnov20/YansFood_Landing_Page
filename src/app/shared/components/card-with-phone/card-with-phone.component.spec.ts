import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithPhoneComponent } from './card-with-phone.component';

describe('CardWithPhoneComponent', () => {
  let component: CardWithPhoneComponent;
  let fixture: ComponentFixture<CardWithPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
