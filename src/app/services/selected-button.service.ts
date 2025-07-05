// selected-button.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedButtonService {

  selectedButtonId = signal<number | null>(null);

  selectButton(buttonId: number) {
    console.log('Selecting button:', buttonId)
    this.selectedButtonId.set(buttonId);
  }

  deselectAll() {
    this.selectedButtonId.set(null);
  }
}
