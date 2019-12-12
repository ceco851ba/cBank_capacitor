import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatchartPage } from './statchart.page';

const routes: Routes = [
  {
    path: '',
    component: StatchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatchartPageRoutingModule {}
