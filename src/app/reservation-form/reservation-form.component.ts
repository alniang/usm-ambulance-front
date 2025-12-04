import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from '../core/services/message.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
  imports: [
    ReactiveFormsModule, 
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class ReservationFormComponent {
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService); 

  formGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    adresse: ['', [Validators.required, Validators.minLength(5)]],
    destination: ['', [Validators.required]],
    date: ['', [Validators.required]],
    duree: [null, [Validators.required, Validators.min(1)]],
  });

  submit(event: Event){
    event.preventDefault();  
    
    if (!this.formGroup.valid) return;


    const message = { ...this.formGroup.value };  // 👉 objet simple compatible Firestore

    console.log(message);
    this.messageService.addMessage(message)
      .then(() => {
        this.formGroup.reset();
      });
  }
}
