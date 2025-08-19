import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {PrimaryButtonComponent} from '../../shared/components/primary-button/primary-button.component';
import {SecondaryButtonComponent} from '../../shared/components/secondary-button/secondary-button.component';
import {CirclePlay, LucideAngularModule} from 'lucide-angular';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {MenuBurgerComponent} from '../../shared/components/menu-burger/menu-burger.component';
import {AnnounceStickerComponent} from '../../shared/components/announce-sticker/announce-sticker.component';


@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    LucideAngularModule,
    NavbarComponent,
    MenuBurgerComponent,
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    AnnounceStickerComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  navbarButtons : string[] = [
    'Accueil',
    'Présentation',
    'Partenaire',
    'Guide'
  ];
  protected readonly  playIcon = CirclePlay;

  menuDisplay = false

  toggleMenu = () =>{
    this.menuDisplay = !this.menuDisplay

  }
}
