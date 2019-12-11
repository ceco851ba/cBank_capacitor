import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRgenPage } from './qrgen.page';

const routes: Routes = [
  {
    path: '',
    component: QRgenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRgenPageRoutingModule {}
