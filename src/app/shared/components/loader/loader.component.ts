import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit{
  show = true;

  ngOnInit() {
    // Le loader reste 10 secondes
    setTimeout(() => {
      this.show = false;
    }, 2000);
  }

}
