import {Component, Input} from '@angular/core';
import {EllipseComponent} from '../ellipse/ellipse.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card-with-phone',
  imports: [
    EllipseComponent,
    NgOptimizedImage,
  ],
  templateUrl: './card-with-phone.component.html',
  styleUrl: './card-with-phone.component.css'
})
export class CardWithPhoneComponent {
  @Input() imgPath: string ='';

}
