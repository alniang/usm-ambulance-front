import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

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
export class HeaderComponent {}
