import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVideoModalComponent } from './app-video-modal.component';

describe('AppVideoModalComponent', () => {
  let component: AppVideoModalComponent;
  let fixture: ComponentFixture<AppVideoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppVideoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppVideoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
