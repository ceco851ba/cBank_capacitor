import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrgen',
  templateUrl: './qrgen.page.html',
  styleUrls: ['./qrgen.page.scss'],
})
export class QRgenPage implements OnInit {
  qrCodeText: string = '';
  receiverId: number = null;
  constructor() { }

  ngOnInit() {
  }

  generateQR() {
    const finalObject = {
      receiverId: this.receiverId,
    }
    this.qrCodeText=JSON.stringify(finalObject);
  }

}
