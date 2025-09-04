import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import {SelectedButtonService} from '../../services/selected-button.service';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  @Input() sectionId!: string;
  @Input() buttonId!: number;

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private selectedButtonService: SelectedButtonService
  ) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.selectedButtonService.selectButton(this.buttonId);
          }
        });
      },
      { threshold: 0.5 } // 50% de la section doit être visible
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
