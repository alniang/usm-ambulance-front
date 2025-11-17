import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Ambulance, AmbulanceType } from '../../core/models/ambulance.model';
import { BookingForm } from '../booking-form/booking-form';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { AmbulanceService } from '../../core/services/ambulance.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ambulance-details',
  standalone: true,
  imports: [MatIconModule, MatDialogModule, MatChipsModule, MatDividerModule],
  templateUrl: './ambulance-details.html',
  styleUrl: './ambulance-details.scss'
})
export class AmbulanceDetails {
  readonly #route = inject(ActivatedRoute);
  readonly #ambulanceService = inject(AmbulanceService);
  readonly #ambulanceId = this.#route.snapshot.paramMap.get('id')!;


  readonly ambulance =toSignal(this.#ambulanceService.getById(this.#ambulanceId));
  constructor(
    // @Inject(MAT_DIALOG_DATA) public ambulance: Ambulance,
    // private dialogRef: MatDialogRef<AmbulanceDetails>,
    // private dialog: MatDialog
  ) {}

  getTypeLabel(type: AmbulanceType): string {
    const labels: Record<AmbulanceType, string> = {
      [AmbulanceType.BASIC]: 'Standard',
      [AmbulanceType.ADVANCED]: 'Médicalisée',
      [AmbulanceType.ICU]: 'Réanimation',
      [AmbulanceType.NEONATAL]: 'Néonatale'
    };
    return labels[type] || type;
  }

  // openBookingForm(): void {
  //   this.dialogRef.close();
  //   this.dialog.open(BookingForm, {
  //     width: '700px',
  //     maxWidth: '95vw',
  //     data: this.ambulance,
  //     panelClass: 'booking-form-dialog'
  //   });
  // }

  // close(): void {
  //   this.dialogRef.close();
  // }
}
