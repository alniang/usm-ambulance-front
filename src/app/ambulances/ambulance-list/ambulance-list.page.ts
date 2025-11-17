import { Component, inject, signal } from '@angular/core';
import { IonCol, IonGrid, IonRow, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { AmbulanceService } from 'src/app/core/services/ambulance.service';
import { toSignal } from '@angular/core/rxjs-interop';

import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { Ambulance } from 'src/app/core/models/ambulance.model';
import { AmbulanceCardComponent } from '../ambulance-card/ambulance-card.component';
import { addIcons } from 'ionicons';
import { bandageOutline, carOutline, fitnessOutline, medicalOutline, medkitOutline, medkitSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'ambulance-list.page.html',
  styleUrls: ['ambulance-list.page.scss'],
  imports: [IonCol, IonGrid, IonRow, IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, AmbulanceCardComponent, ExploreContainerComponent]
})
export class AmbulanceListPage {

  readonly #ambulanceService = inject(AmbulanceService)
  readonly ambulanceList = toSignal(this.#ambulanceService.getAll(), {initialValue: []} );
  readonly searchTerm = signal('');
  
  constructor() {
      addIcons({ carOutline, medkitOutline, medkitSharp, bandageOutline, medicalOutline, fitnessOutline });
  }
  // constructor(
  //   private dialog: MatDialog
  // ) {}


  // openDetails(ambulance: Ambulance): void {
  //   this.dialog.open(AmbulanceDetails, {
  //     width: '800px',
  //     maxWidth: '95vw',
  //     data: ambulance,
  //     panelClass: 'ambulance-details-dialog'
  //   });
  // }

}
