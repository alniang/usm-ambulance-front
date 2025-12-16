import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    IonTitle, 
    IonToolbar, 
    IonHeader
  ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
