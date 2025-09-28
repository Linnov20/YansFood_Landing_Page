import {Component, HostListener, ViewChild} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {PrimaryButtonComponent} from '../../shared/components/primary-button/primary-button.component';
import {SecondaryButtonComponent} from '../../shared/components/secondary-button/secondary-button.component';
import {
  CirclePlay,
  LucideAngularModule, Mail,
  PartyPopper, Phone, Play,
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
import {EllipseComponent} from '../../shared/components/ellipse/ellipse.component';
import {BgBlurComponent} from '../../shared/components/bg-blur/bg-blur.component';
import {ScrollSpyDirective} from '../../shared/directives/scroll-spy.directive';
import {AppVideoModalComponent} from '../../shared/components/video-modal/app-video-modal.component';


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
    EllipseComponent,
    BgBlurComponent,
    NgClass,
    ScrollSpyDirective,
    AppVideoModalComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  navbarButtons = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Présentation', id: 'presentation' },
    { label: 'Partenaire', id: 'partenaire' },
    { label: 'Guide', id: 'guide' }
  ];

  scrolled = false;

  @ViewChild('trailerModal') trailerModal!: AppVideoModalComponent;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 80; // active à partir de 50px de scroll
  }
  profilePath : string = '/profile-screen.svg'
  announcePath : string = '/announces-screen.svg'
  foodDescPath : string = '/food_desc_screen.svg'
  protected readonly  playIcon = CirclePlay;
  protected readonly sparkle  = Sparkle;
  protected readonly utensils_crossed = UtensilsCrossed
  protected readonly truck_electric = TruckElectric;
  protected readonly party_popper = PartyPopper
  protected readonly play_store = Play
  protected readonly mail = Mail;

  protected readonly phone = Phone

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

  contacts = [
    {
      icon : this.mail,
      text : "contact@yansFood.com"
    },
    {
      icon : this.phone,
      text : "+237 658 532 272"
    }
  ]


  links = [
    "Accueil",
    "Présentation",
    "Partenaires",
    "Guide"
  ]

  legal = [
    {
      label : "Conditions D'utilisation",
      link : "Terms_Conditions.pdf"
    },
    {
      label : "Politique Confidentialité",
      link : "PRIVACY_POLICY.pdf"
    },
    {
      label : "Politique Cookies",
      link : "conditions-d-utilisation"
    }
  ]



  produit = [
    {
      label: "YansFood",
      link: "https://app.yansfood.com"
    },
    {
      label: "YansResto",
      link: "https://resto.yansfood.com"
    },
    {
      label: "YansDelivery",
      link: "https://delivery.yansfood.com"
    },

  ]

  menuDisplay = false
  toggleMenu = () =>{
    this.menuDisplay = !this.menuDisplay

  }
  downloadApk() {
    window.location.href = "/yansfood.apk";
  }

  openTrailer() {
    this.trailerModal.show();
  }
}
