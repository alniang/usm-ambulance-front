import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IonFooter, IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, helpCircleOutline, trash, homeOutline, cashOutline, timerOutline, heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp, medicalOutline, alertCircleOutline, locationOutline, mailOutline, callOutline } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    RouterLink,
    RouterModule,
    IonFooter,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonLabel,
  ]
})
export class FooterComponent  implements OnInit {

  constructor() {
    addIcons({ add, helpCircleOutline, trash, homeOutline, cashOutline,timerOutline,heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp, medicalOutline, alertCircleOutline, locationOutline, mailOutline, callOutline})
  }

  callEmergency() {
    window.location.href = 'tel:+221771234567';
  }

  ngOnInit() {}

}
