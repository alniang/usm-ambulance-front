import { Component, EventEmitter, Output, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from '../core/services/message.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SenegalPhone } from '../core/directives/senegal-phone';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
  imports: [
    ReactiveFormsModule, 
    SenegalPhone,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class ReservationFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService); 
  private snackBar = inject(MatSnackBar);
  private selectedDate?: Date;
  
  submitted = false;
  today: Date = new Date();
  
  formGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    telephone: ['', [Validators.required]],
    adresse: ['', [Validators.required, Validators.minLength(5)]],
    destination: ['', [Validators.required]],
    date: ['', [Validators.required]],
    heure: ['', [Validators.required]],
    infos: [''],
  });
  
  ngOnInit(): void {
    this.formGroup.get('date')?.valueChanges.subscribe((date: any) => {
      this.selectedDate = date;
    });
  }

  getFilteredHours(): string[] {
  const hours: string[] = [];

  // Générer toutes les demi-heures possibles
  for (let h = 0; h < 24; h++) {
    for (let m of [0, 30]) {
      const hh = h.toString().padStart(2, '0');
      const mm = m.toString().padStart(2, '0');
      hours.push(`${hh}:${mm}`);
    }
  }

  // Si aucune date sélectionnée, retourner toutes les heures
  if (!this.selectedDate) return hours;

  const now = new Date();
  const isToday = this.selectedDate.toDateString() === now.toDateString();

  // Si ce n’est pas aujourd’hui, toutes les heures sont valides
  if (!isToday) return hours;

  // Filtrer les heures passées
  return hours.filter(h => {
    const [hh, mm] = h.split(':').map(Number);
    return hh > now.getHours() || (hh === now.getHours() && mm > now.getMinutes());
  });
}

  submit(event: Event){
    event.preventDefault();  

    this.submitted = true;
    
    if (!this.formGroup.valid) return;

    const message = { ...this.formGroup.value };  // 👉 objet simple compatible Firestore

    console.log(message);
    this.messageService.addMessage(message)
      .then(() => {
        // Message de succès
        this.snackBar.open(
          'Réservation envoyée avec succès 🚑',
          'OK',
          {
            duration: 4000,
            panelClass: ['snackbar-success']
          }
        );
        // Réinitialisation du formulaire
        this.formGroup.reset();
        this.formGroup.markAsPristine();
        this.formGroup.markAsUntouched();

        this.submitted = false;
      })
      .catch(() => {
        // Message d'erreur
        this.snackBar.open(
          `Échec de l’envoi. Veuillez réessayer.`,
          'OK',
          {
            duration: 6000,
            panelClass: ['snackbar-error']
          }
        );
      });
  }

  hasError(controlName: string) {    
    const control = this.formGroup.get(controlName);
    return control?.invalid && (control?.touched || control?.dirty)
  }

}
