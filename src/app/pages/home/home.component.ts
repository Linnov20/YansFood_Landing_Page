import { Component, Input } from '@angular/core';

import {TitleLgWithIconComponent} from '../../shared/components/title-lg-with-icon/title-lg-with-icon.component';
import {CardWithPhoneComponent} from '../../shared/components/card-with-phone/card-with-phone.component';
import {TitleXlWithIconComponent} from '../../shared/components/title-xl-with-icon/title-xl-with-icon.component';
import {NgOptimizedImage} from '@angular/common';
import {PrimaryButtonComponent} from '../../shared/components/primary-button/primary-button.component';
import {SecondaryButtonComponent} from '../../shared/components/secondary-button/secondary-button.component';


@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  navbarButtons : string[] = [
    'Accueil',
    'Présentation',
    'Partenaire',
    'Guide'
  ]
}
