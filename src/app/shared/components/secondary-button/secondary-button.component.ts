import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [],
  templateUrl: './secondary-button.component.html',
  standalone: true,
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {
  @Input() name = 'button name'
}
