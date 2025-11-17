import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonChip, IonItemDivider, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { AmbulanceService } from 'src/app/core/services/ambulance.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AmbulanceType } from 'src/app/core/models/ambulance.model';
import { checkmarkCircleOutline, closeCircleOutline, informationCircleOutline, informationCircleSharp, informationOutline, peopleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-ambulance-details',
  templateUrl: './ambulance-details.page.html',
  styleUrls: ['./ambulance-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,
    IonToolbar, CommonModule, FormsModule, IonIcon,
    IonChip, IonItemDivider, IonButton]
})
export class AmbulanceDetailsPage {

  readonly #route = inject(ActivatedRoute);
  readonly #ambulanceService = inject(AmbulanceService);
  readonly #ambulanceId = this.#route.snapshot.paramMap.get('id')!;


  readonly ambulance =toSignal(this.#ambulanceService.getById(this.#ambulanceId));
  constructor(
    // @Inject(MAT_DIALOG_DATA) public ambulance: Ambulance,
    // private dialogRef: MatDialogRef<AmbulanceDetails>,
    // private dialog: MatDialog
  ) {
    addIcons({checkmarkCircleOutline, informationCircleOutline, peopleOutline, informationCircleSharp, closeCircleOutline})
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

}
