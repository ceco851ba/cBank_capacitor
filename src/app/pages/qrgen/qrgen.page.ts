import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-qrgen',
  templateUrl: './qrgen.page.html',
  styleUrls: ['./qrgen.page.scss'],
})
export class QRgenPage implements OnInit {
  qrCodeText: string = '';
  receiverId: number = 0; // PLATBA --> ID:0 prijem ID:1
  receiverIBAN: string =null;
  receiverName: string =null;
  amount:number =null;

  //pridat ostatne 
  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  generateQR() {
    const finalObject = {
      receiverId: this.receiverId,
      receiverIBAN: this.receiverIBAN,
      receiverName: this.receiverName,
      amount: this.amount
      //pridat ostatne 
    }
    this.qrCodeText=JSON.stringify(finalObject);
  }

  returnToProfileButtonOnclick(){
    this.navController.navigateRoot("tabs/tab1");
  }

}
