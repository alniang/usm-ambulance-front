import { Component, inject } from '@angular/core';
import { IonCard, IonButton, IonIcon, IonContent, IonCardContent, IonTitle, IonToolbar, IonHeader, IonButtons } from '@ionic/angular/standalone';

import { add, carOutline, cashOutline, checkmarkOutline, heartSharp, timeOutline, timerOutline, calendarOutline, callSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    RouterModule, 
    FooterComponent, 
    HeaderComponent,
    IonContent, 
    IonCard, 
    IonIcon, 
    IonButton,
    IonCardContent, 
  ],
})
export class HomePage {
  readonly router = inject(Router);

  callEmergencyWhatsapp() {
    const phone = '221766365050'; 
    const message = encodeURIComponent("Bonjour, je souhaite avoir plus d'informations !");
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");
  }

  callEmergency() {
    window.location.href = 'tel:+221766365050';
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
