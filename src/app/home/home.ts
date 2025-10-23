import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  features: Feature[] = [
    {
      icon: 'schedule',
      title: 'Disponible 24/7',
      description: 'Service d\'urgence disponible jour et nuit, tous les jours de l\'année pour répondre à vos besoins'
    },
    {
      icon: 'verified',
      title: 'Personnel Qualifié',
      description: 'Équipe de professionnels certifiés et expérimentés en transport médical d\'urgence'
    },
    {
      icon: 'local_shipping',
      title: 'Flotte Moderne',
      description: 'Ambulances récentes équipées des dernières technologies médicales'
    },
    {
      icon: 'speed',
      title: 'Intervention Rapide',
      description: 'Temps de réponse optimisé pour une prise en charge rapide des patients'
    },
    {
      icon: 'favorite',
      title: 'Soins de Qualité',
      description: 'Accompagnement médical professionnel pendant tout le trajet'
    },
    {
      icon: 'payments',
      title: 'Tarifs Transparents',
      description: 'Prix clairs et détaillés sans frais cachés pour tous nos services'
    }
  ];

  constructor(private router: Router) {}

  navigateToAmbulances(): void {
    this.router.navigate(['/ambulances']);
  }

  callEmergency(): void {
    window.location.href = 'tel:+33123456789';
  }
}
