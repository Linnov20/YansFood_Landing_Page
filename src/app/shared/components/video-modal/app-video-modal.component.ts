import {Component, ElementRef, Input, signal, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-modal',
  imports: [],
  templateUrl: './app-video-modal.component.html',
  styleUrl: './app-video-modal.component.css'
})
export class AppVideoModalComponent {
  @Input() videoUrl: string = '';
  open = signal(false);

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  show() { this.open.set(true); }

  close() {
    this.open.set(false);
    if (this.videoPlayer?.nativeElement) {
      this.videoPlayer.nativeElement.pause();
      this.videoPlayer.nativeElement.currentTime = 0; // remet au début
    }
  }
}
