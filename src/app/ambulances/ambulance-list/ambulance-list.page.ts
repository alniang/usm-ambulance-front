import { Component, inject, signal } from '@angular/core';
import { IonCol, IonGrid, IonRow, IonHeader, IonContent, IonIcon, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { AmbulanceService } from 'src/app/core/services/ambulance.service';
import { toSignal } from '@angular/core/rxjs-interop';

import { AmbulanceCardComponent } from '../ambulance-card/ambulance-card.component';
import { addIcons } from 'ionicons';
import { bandageOutline, carOutline, fitnessOutline, medicalOutline, medkitOutline, medkitSharp } from 'ionicons/icons';
import { FooterComponent } from 'src/app/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { FieldValue, Firestore, Timestamp, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Ambulance} from 'src/app/core/models/ambulance.model';

@Component({
  selector: 'app-ambulance-list',
  templateUrl: 'ambulance-list.page.html',
  styleUrls: ['ambulance-list.page.scss'],
  imports: [RouterModule, HeaderComponent, FooterComponent, IonCol, IonGrid, IonRow, IonHeader, IonIcon, IonContent, AmbulanceCardComponent]
})
export class AmbulanceListPage {

  readonly #ambulanceService = inject(AmbulanceService);
  readonly ambulanceList = toSignal(this.#ambulanceService.getAmbulances(), {initialValue: []} );
  readonly searchTerm = signal('');

  constructor() {
    addIcons({ carOutline, medkitOutline, medkitSharp, bandageOutline, medicalOutline, fitnessOutline });
  }
  
}
