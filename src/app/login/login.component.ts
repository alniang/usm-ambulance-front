import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule, 
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
})
export class LoginDialogComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private location = inject(Location);

  loading = false;
  error = '';

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.invalid) return;

    const rawForm = this.form.getRawValue();
    this.loading = true;
    this.error = '';
    
    this.authService
      .login(rawForm.email, rawForm.password)
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/tableau-de-bord']);
        },
        error: () => {
          this.loading = false;
          this.error = 'Email ou mot de passe incorrect';
        }
      });
  }

  goBack() {
    this.location.back();
  }

}
