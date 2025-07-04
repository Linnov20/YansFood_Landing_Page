import {Component, Input} from '@angular/core';
import {Home, LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-title-lg-with-icon',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './title-lg-with-icon.component.html',
  styleUrl: './title-lg-with-icon.component.css'
})
export class TitleLgWithIconComponent {
  @Input() imgPath = '';
  @Input() imgDescription = '';
  @Input() title = 'title';
  @Input() readonly icon = Home;
}
