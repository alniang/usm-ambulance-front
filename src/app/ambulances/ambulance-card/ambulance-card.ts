import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Ambulance, AmbulanceType } from '../../core/models/ambulance.model';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ambulance-card',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatDividerModule],
  templateUrl: './ambulance-card.html',
  styleUrl: './ambulance-card.scss'
})
export class AmbulanceCard {
  @Input() ambulance!: Ambulance;
  @Output() viewDetails = new EventEmitter<Ambulance>();
  readonly #router = inject(Router);

  getTypeIcon(type: AmbulanceType): string {
    const icons: Record<AmbulanceType, string> = {
      [AmbulanceType.BASIC]: 'directions_car',
      [AmbulanceType.ADVANCED]: 'emergency',
      [AmbulanceType.ICU]: 'monitor_heart',
      [AmbulanceType.NEONATAL]: 'child_care'
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
    // this.viewDetails.emit(this.ambulance);
    // You can also add navigation logic here if needed
    console.log('Navigating to ambulance details for ID:', this.ambulance._id);
    
    this.#router.navigate(['/ambulances', this.ambulance._id]);
  }
}
