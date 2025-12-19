import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    RouterModule,
    IonFooter,
  ]
})
export class FooterComponent  {}
