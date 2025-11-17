import { IonCard, IonIcon, IonCardContent, IonItem, IonChip, IonItemDivider, IonButton } from '@ionic/angular/standalone';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ambulance, AmbulanceType } from 'src/app/core/models/ambulance.model';
import { arrowForwardCircleOutline,arrowForwardOutline,carOutline, carSharp, happyOutline, happySharp, medicalOutline, medicalSharp, peopleOutline, pulseOutline, pulseSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-ambulance-card',
  templateUrl: './ambulance-card.component.html',
  styleUrls: ['./ambulance-card.component.scss'],
  imports: [IonCard, IonIcon, IonCardContent, IonChip, IonItemDivider, IonButton]
  
})
export class AmbulanceCardComponent {

  @Input() ambulance!: Ambulance;
  @Output() viewDetails = new EventEmitter<Ambulance>();
  readonly #router = inject(Router);

  constructor() {
    addIcons({ carSharp, pulseSharp, medicalSharp, happySharp, arrowForwardOutline });
  }

  getTypeIcon(type: AmbulanceType): string {
    const icons: Record<AmbulanceType, string> = {
      [AmbulanceType.BASIC]: 'car-sharp',
      [AmbulanceType.ADVANCED]: 'medical-sharp',
      [AmbulanceType.ICU]: 'pulse-sharp',
      [AmbulanceType.NEONATAL]: 'happy-sharp'
    };
    return icons[type] || 'local_hospital';
  }

  getTypeLabel(type: AmbulanceType): string {
    const labels: Record<AmbulanceType, string> = {
      [AmbulanceType.BASIC]: 'Standard',
      [AmbulanceType.ADVANCED]: 'Médicalisée',
      [AmbulanceType.ICU]: 'Réanimation',
      [AmbulanceType.NEONATAL]: 'Néonatale'
    };
    return labels[type] || type;
  }

  onViewDetails(): void {
    console.log('Navigating to ambulance details for ID:', this.ambulance._id);
    
    this.#router.navigate(['/ambulances', this.ambulance._id]);
  }

}
