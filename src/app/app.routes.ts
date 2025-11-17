import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  // { path: 'tabs', component: TabsPage, children: [

  
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

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'} // Tout le temps le positionner en dernier car le router d'angular fonctionne du haut vers le bas!!

  // ]
// },
,
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
},

];