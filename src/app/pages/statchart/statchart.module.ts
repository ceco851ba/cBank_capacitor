import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatchartPageRoutingModule } from './statchart-routing.module';

import { StatchartPage } from './statchart.page';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatchartPageRoutingModule,
    ChartsModule
  ],
  

  declarations: [StatchartPage]
})
export class StatchartPageModule {}
