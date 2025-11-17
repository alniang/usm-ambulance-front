import { Component, computed, inject, signal } from '@angular/core';
import { AmbulanceService } from '../../core/services/ambulance.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {MatCardModule} from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AmbulanceCard } from "../ambulance-card/ambulance-card";
import { AmbulanceDetails } from '../ambulance-details/ambulance-details';
import { Ambulance } from '../../core/models/ambulance.model';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-ambulance-list',
  imports: [MatCardModule, MatIconModule, AmbulanceCard],
  templateUrl: './ambulance-list.html',
  styleUrl: './ambulance-list.scss'
})
export class AmbulanceList {
  readonly #ambulanceService = inject(AmbulanceService)
  readonly ambulanceList = toSignal(this.#ambulanceService.getAll(), {initialValue: []} );
  readonly searchTerm = signal('');
  
  constructor(
    private dialog: MatDialog
  ) {}


  openDetails(ambulance: Ambulance): void {
    this.dialog.open(AmbulanceDetails, {
      width: '800px',
      maxWidth: '95vw',
      data: ambulance,
      panelClass: 'ambulance-details-dialog'
    });
  }
}
