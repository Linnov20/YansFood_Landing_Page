import {Component, Input} from '@angular/core';
import {LucideAngularModule, Menu, X} from 'lucide-angular';
import {NgOptimizedImage} from '@angular/common';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';
import {SecondaryButtonComponent} from '../secondary-button/secondary-button.component';

@Component({
  selector: 'app-menu-burger',
  imports: [
    LucideAngularModule,
    NgOptimizedImage,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  templateUrl: './menu-burger.component.html',
  standalone: true,
  styleUrl: './menu-burger.component.css'
})
export class MenuBurgerComponent {
  @Input() toggleMenu : Function = ()=>{}
  @Input() navbarButtons: {label: string, id: string}[] = [{
    label: '',
    id: ''
  }];
  @Input() menuDisplay !: boolean

  protected readonly close = X;
  protected readonly menu = Menu;
}
