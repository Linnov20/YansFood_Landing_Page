import {Component, computed, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {SelectedButtonService} from '../../../services/selected-button.service';

@Component({
  selector: 'app-primary-button',
  imports: [
    NgStyle
  ],
  standalone: true,
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  @Input() name : string = 'Présentation';
  @Input() buttonId !: number;
  @Input() sectionId!: string;

  @Input() currentColor: string = '#F14237';



  constructor(private selectedButtonService: SelectedButtonService) {

  }

  isSelected = computed(() => this.selectedButtonService.selectedButtonId() === this.buttonId);


  onButtonClick() {
    const isCurrentlySelected = this.isSelected();

    if (isCurrentlySelected) {

      this.selectedButtonService.deselectAll();
      this.currentColor = '#000000';
    } else {

      this.selectedButtonService.deselectAll();
      this.selectedButtonService.selectedButtonId.set(this.buttonId);
      this.selectedButtonService.selectButton(this.buttonId);
      this.currentColor = '#F14237';
    }

    const el = document.getElementById(this.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
