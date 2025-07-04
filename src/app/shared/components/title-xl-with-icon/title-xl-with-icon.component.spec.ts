import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleXlWithIconComponent } from './title-xl-with-icon.component';

describe('TitleXlWithIconComponent', () => {
  let component: TitleXlWithIconComponent;
  let fixture: ComponentFixture<TitleXlWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleXlWithIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleXlWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
