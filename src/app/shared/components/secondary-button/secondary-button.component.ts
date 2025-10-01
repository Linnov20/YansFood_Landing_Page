import {Component, Input} from '@angular/core';
import {DownloadService} from '../../../services/download.service';

@Component({
  selector: 'app-secondary-button',
  imports: [],
  templateUrl: './secondary-button.component.html',
  standalone: true,
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {
  @Input() name = 'button name'

  constructor(private downloadService: DownloadService) {
  }


  handleDownload() {
    window.location.href = "/yansfood_app.apk";
    this.downloadService.logDownload().subscribe({
      next: (res) => {
        console.log("Téléchargement comptabilisé :", res);
      }
    });
  }
}
