import { Routes } from '@angular/router';
import { AmbulanceList } from './ambulances/ambulance-list/ambulance-list';
import { Home } from './home/home';
import { AmbulanceDetails } from './ambulances/ambulance-details/ambulance-details';

// Plus une route est spécifique on la met en haut
// Plus une route est générale on la met en bas
export const routes: Routes = [
    // Routes will be added here
    { path: 'ambulances', component: AmbulanceList, title: 'Ambulances'},
    { path: 'ambulances/:id', component: AmbulanceDetails, title: 'Ambulances'},
    { path: 'accueil', component: Home, title: 'Accueil'},
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', redirectTo: 'accueil' } // Tout le temps le positionner en dernier car le router d'angular fonctionne du haut vers le bas!!
];
