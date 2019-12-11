import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRgenPageRoutingModule } from './qrgen-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRgenPage } from './qrgen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    QRgenPageRoutingModule
  ],
  declarations: [QRgenPage]
})
export class QRgenPageModule {}
