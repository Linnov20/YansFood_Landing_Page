import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLgWithIconComponent } from './title-lg-with-icon.component';

describe('TitleLgWithIconComponent', () => {
  let component: TitleLgWithIconComponent;
  let fixture: ComponentFixture<TitleLgWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleLgWithIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLgWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
