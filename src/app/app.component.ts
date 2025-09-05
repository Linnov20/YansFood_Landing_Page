import { Component } from '@angular/core';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    LoaderComponent,
    RouterOutlet,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yansFood';
}
