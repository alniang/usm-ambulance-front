import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonChip, IonItemDivider } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { AmbulanceService } from 'src/app/core/services/ambulance.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AmbulanceType } from 'src/app/core/models/ambulance.model';
import { checkmarkCircleOutline, closeCircleOutline, informationCircleOutline, informationCircleSharp, medkitOutline, peopleOutline, settingsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';

@Component({
  selector: 'app-ambulance-details',
  templateUrl: './ambulance-details.page.html',
  styleUrls: ['./ambulance-details.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    IonContent, CommonModule, FormsModule, IonIcon,
    IonChip, IonItemDivider]
})
export class AmbulanceDetailsPage {

  readonly #route = inject(ActivatedRoute);
  readonly #ambulanceService = inject(AmbulanceService);
  readonly #ambulanceId = this.#route.snapshot.paramMap.get('id')!;

  readonly ambulance =toSignal(this.#ambulanceService.getAmbulanceById(this.#ambulanceId));

  constructor() {
    addIcons({checkmarkCircleOutline, informationCircleOutline, peopleOutline, informationCircleSharp, closeCircleOutline, settingsOutline, medkitOutline})
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
