// selected-button.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedButtonService {

  selectedButtonId = signal<string | null>('');

  selectButton(buttonId: string) {
    console.log('Selecting button:', buttonId)
    this.selectedButtonId.set(buttonId);
  }

  deselectAll() {
    this.selectedButtonId.set(null);
  }
}
