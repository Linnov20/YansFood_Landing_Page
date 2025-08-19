import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {PrimaryButtonComponent} from "../primary-button/primary-button.component";
import {SecondaryButtonComponent} from "../secondary-button/secondary-button.component";

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() navbarButtons: string[] = [];

}
