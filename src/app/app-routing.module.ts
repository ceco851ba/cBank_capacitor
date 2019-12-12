import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./pages/profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'transaction-details-page',
    loadChildren: () => import('./pages/transaction-details-page/transaction-details-page.module').then( m => m.TransactionDetailsPagePageModule)
  },
  {
    path: 'qrgen',
    loadChildren: () => import('./pages/qrgen/qrgen.module').then( m => m.QRgenPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./pages/chart/chart.module').then( m => m.ChartPageModule)
  },
  {
    path: 'statchart',
    loadChildren: () => import('./pages/statchart/statchart.module').then( m => m.StatchartPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
