import {Component, Input} from '@angular/core';
import {Bell, Home, LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-title-xl-with-icon',
    imports: [
        LucideAngularModule
    ],
  templateUrl: './title-xl-with-icon.component.html',
  styleUrl: './title-xl-with-icon.component.css'
})
export class TitleXlWithIconComponent {
  @Input() title = 'Commande';
  @Input() icon = Bell;

}
