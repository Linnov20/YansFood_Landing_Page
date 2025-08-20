import { Component } from '@angular/core';

@Component({
  selector: 'app-announce-sticker',
  imports: [],
  templateUrl: './announce-sticker.component.html',
  standalone: true,
  styleUrl: './announce-sticker.component.css'
})
export class AnnounceStickerComponent {
  elements =[
    {
      icon : "icon",
      title : "Commande",
      description: "Auprès Des Resto De Ta Localité",
      separator : "/"
    },
    {
      icon : "icon",
      title : "Livrer",
      description: "Aussi Rapidement Que Commander",
    },

  ];

}
