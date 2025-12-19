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
export class HomePage {
  readonly router = inject(Router);
  private fb = inject(FormBuilder);

  isMobileOrTablet = false;

  formGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    adresse: ['', [Validators.required, Validators.minLength(5)]],
    destination: ['', [Validators.required]],
    date: ['', [Validators.required]],
    duree: [null, [Validators.required, Validators.min(1)]],
  });

  constructor() {
    addIcons({ add, cashOutline,timerOutline,heartSharp, timeOutline, checkmarkOutline, carOutline, calendarOutline, callSharp, shieldOutline})
  }
}
