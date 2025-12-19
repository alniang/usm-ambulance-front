import { Routes } from '@angular/router';
import { authGuard } from './core/services/auth-guard';

export const routes: Routes = [  
  {
    path: 'ambulances/:id',
    loadComponent: () => import('./ambulances/ambulance-details/ambulance-details.page').then( m => m.AmbulanceDetailsPage)
  },

  {
    path: 'home', loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  { path: 'ambulances', loadComponent: () => import('./ambulances/ambulance-list/ambulance-list.page').then( m => m.AmbulanceListPage) },
  {
    path: 'ambulances/:id',
    loadComponent: () => import('./ambulances/ambulance-details/ambulance-details.page').then( m => m.AmbulanceDetailsPage)
  },
  {
    path: 'tableau-de-bord', loadComponent: () => import('./tableau-de-bord/tableau-de-bord.component').then( m => m.TableauDeBordComponent), canActivate: [authGuard] 
  },
  {
    path: 'login', loadComponent: () => import('./login/login.component').then( m => m.LoginDialogComponent)
  },
  { 
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { 
    path: '**', redirectTo: 'home'
  } // Tout le temps le positionner en dernier car le router d'angular fonctionne du haut vers le bas!!
];