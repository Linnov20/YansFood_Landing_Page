import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bg-blur',
  imports: [],
  templateUrl: './bg-blur.component.html',
  styleUrl: './bg-blur.component.css'
})
export class BgBlurComponent {
  @Input() redColorUp: boolean = true;

}
