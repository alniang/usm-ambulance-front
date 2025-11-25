import { Component } from '@angular/core';
// import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';
import { add, homeOutline,cashOutline, timerOutline, heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp, trash, helpCircleOutline, medicalOutline, alertCircleOutline, locationOutline, mailOutline, callOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp, 
    IonRouterOutlet, 
    IonContent
  ],
})
export class AppComponent {
  constructor() {
    addIcons({ add, helpCircleOutline, trash, homeOutline, cashOutline,timerOutline,heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp, medicalOutline, alertCircleOutline, locationOutline, mailOutline, callOutline})
  }
}
