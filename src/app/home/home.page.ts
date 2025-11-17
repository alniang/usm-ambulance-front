import { Component, inject } from '@angular/core';
import { IonHeader, IonMenuButton, IonButtons, IonToolbar, IonTitle, IonCard, IonButton, IonIcon, IonContent, IonMenu, IonCardContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { add, addCircle, carOutline, cashOutline, checkmarkDoneCircle, checkmarkOutline, heartSharp, logoIonic, shapes, timeOutline, timerOutline, calendarOutline, callSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonButtons, IonMenuButton, IonToolbar, IonTitle, IonContent, IonCard, IonIcon, IonButton,IonCardContent, IonMenu, ExploreContainerComponent],
})
export class HomePage {
readonly router = inject(Router);

callEmergency() {
throw new Error('Method not implemented.');
}
navigateToAmbulances() {
this.router.navigate(['/ambulances']);
}

  features: Feature[] = [
    {
      icon: 'time-outline',
      title: 'Disponible 24/7',
      description: 'Service d\'urgence disponible jour et nuit, tous les jours de l\'année pour répondre à vos besoins'
    },
    {
      icon: 'checkmark-outline',
      title: 'Personnel Qualifié',
      description: 'Équipe de professionnels certifiés et expérimentés en transport médical d\'urgence'
    },
    {
      icon: 'car-outline',
      title: 'Flotte Moderne',
      description: 'Ambulances récentes équipées des dernières technologies médicales'
    },
    {
      icon: 'timer-outline',
      title: 'Intervention Rapide',
      description: 'Temps de réponse optimisé pour une prise en charge rapide des patients'
    },
    {
      icon: 'heart-sharp',
      title: 'Soins de Qualité',
      description: 'Accompagnement médical professionnel pendant tout le trajet'
    },
    {
      icon: 'cash-outline',
      title: 'Tarifs Transparents',
      description: 'Prix clairs et détaillés sans frais cachés pour tous nos services'
    }
  ];

  constructor() {
    addIcons({ add, cashOutline,timerOutline,heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp})
  }
}
