import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceStickerComponent } from './announce-sticker.component';

describe('AnnounceStickerComponent', () => {
  let component: AnnounceStickerComponent;
  let fixture: ComponentFixture<AnnounceStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnounceStickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnounceStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
