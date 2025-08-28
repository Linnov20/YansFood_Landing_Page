import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgBlurComponent } from './bg-blur.component';

describe('BgBlurComponent', () => {
  let component: BgBlurComponent;
  let fixture: ComponentFixture<BgBlurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgBlurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgBlurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
