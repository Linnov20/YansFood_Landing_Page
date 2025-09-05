import { Component } from '@angular/core';

import {HomeComponent} from './pages/home/home.component';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    LoaderComponent,
    RouterOutlet,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yansFood';
}
