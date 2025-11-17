import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbulancesRoutingModule } from './ambulances-routing-module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    AmbulancesRoutingModule
  ]
})
export class AmbulancesModule { }
