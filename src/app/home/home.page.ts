import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { IonIcon, IonContent, IonHeader, IonFooter} from '@ionic/angular/standalone';

import { add, carOutline, cashOutline, checkmarkOutline, heartSharp, timeOutline, timerOutline, calendarOutline, callSharp, shieldOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from '../core/services/message.service';
import { AmbulanceService } from '../core/services/ambulance.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';

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
    ReactiveFormsModule,
    ReservationFormComponent,
    FooterComponent, 
    HeaderComponent,
    IonContent, 
    IonHeader,
    IonFooter,
    IonIcon, 
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
})
export class HomePage implements OnInit {
  readonly router = inject(Router);
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService); 
  private breakpointObserver = inject(BreakpointObserver)

  isMobileOrTablet = false;

  formGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    adresse: ['', [Validators.required, Validators.minLength(5)]],
    destination: ['', [Validators.required]],
    date: ['', [Validators.required]],
    duree: [null, [Validators.required, Validators.min(1)]],
  });

  // message = Object.assign(new Message, this.formGroup.value);

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
    addIcons({ add, cashOutline,timerOutline,heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp, shieldOutline})
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
      this.isMobileOrTablet = result.matches;
    });
  }
}
