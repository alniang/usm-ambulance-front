import { Component } from '@angular/core';
// import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonApp, IonRouterOutlet, IonButton, IonItem, IonLabel, IonMenuToggle, IonList, IonHeader, IonMenuButton, IonButtons, IonToolbar, IonTitle, IonContent, IonMenu, IonRouterLinkWithHref, IonIcon } from '@ionic/angular/standalone';
import { add, homeOutline,cashOutline, timerOutline, heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp, trash, helpCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { TabsPage } from "./tabs/tabs.page";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonList, IonItem, IonLabel, IonButton, IonMenuToggle, IonHeader, IonMenuButton, IonButtons, IonToolbar, IonTitle, IonContent, IonMenu, IonRouterLinkWithHref, IonIcon, TabsPage],
})
export class AppComponent {
  constructor() {
      addIcons({ add, helpCircleOutline, trash, homeOutline, cashOutline,timerOutline,heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp})
    }
}
