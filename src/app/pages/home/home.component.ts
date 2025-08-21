import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {PrimaryButtonComponent} from '../../shared/components/primary-button/primary-button.component';
import {SecondaryButtonComponent} from '../../shared/components/secondary-button/secondary-button.component';
import {
  CirclePlay,
  LucideAngularModule,
  PartyPopper,
  Sparkle,
  TruckElectric,
  UtensilsCrossed
} from 'lucide-angular';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {MenuBurgerComponent} from '../../shared/components/menu-burger/menu-burger.component';
import {AnnounceStickerComponent} from '../../shared/components/announce-sticker/announce-sticker.component';
import {CardWithPhoneComponent} from '../../shared/components/card-with-phone/card-with-phone.component';
import {TitleLgWithIconComponent} from '../../shared/components/title-lg-with-icon/title-lg-with-icon.component';
import {TitleXlWithIconComponent} from '../../shared/components/title-xl-with-icon/title-xl-with-icon.component';


@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    LucideAngularModule,
    NavbarComponent,
    MenuBurgerComponent,
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    AnnounceStickerComponent,
    CardWithPhoneComponent,
    TitleLgWithIconComponent,
    TitleXlWithIconComponent,
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

  profilePath : string = '/profile-screen.svg'
  announcePath : string = '/announces-screen.svg'
  foodDescPath : string = '/food_desc_screen.svg'
  protected readonly  playIcon = CirclePlay;
  protected readonly sparkle  = Sparkle;
  protected readonly utensils_crossed = UtensilsCrossed
  protected readonly truck_electric = TruckElectric;
  protected readonly party_popper = PartyPopper


  about = [
    {
      icon : this.sparkle,
      title : "Ne Faites plus les files d’attente",
      description : "YansFood est une application de commande et livraison de repas. commander dès à présent dans vos restaurant préféré et faites vous livrer le plus rapidement possible"
    },
    {
      icon : this.utensils_crossed,
      title : "Vos Restaurants, Nos Partenaires",
      description : "Plus besoin de vos déplacer pour savoir les repas sont encore disponible dans vos restaurants préféré, yansFood est là pour vous."
    },
    {
      icon : this.truck_electric,
      title : "Plus Qu’une Simple App De Livraison Et Commande",
      description : "Restez à l’affut des promotions dans vos restaurants depuis votre téléphone et observer rencontrer les facades cachées de ceux-ci. "
    }
  ]

  menuDisplay = false

  toggleMenu = () =>{
    this.menuDisplay = !this.menuDisplay

  }
}
