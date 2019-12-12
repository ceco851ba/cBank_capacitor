import { Component, OnInit } from '@angular/core';
import { NavController,ToastController} from '@ionic/angular';

@Component({
  selector: 'app-qrgen',
  templateUrl: './qrgen.page.html',
  styleUrls: ['./qrgen.page.scss'],
})
export class QRgenPage implements OnInit {
  qrCodeText: string = '';
  //receiverId: number = 0; // PLATBA --> ID:0 prijem ID:1
  receiverIBAN: string =null;
  receiverName: string =null;
  amount:number =null;
  ibanColor: string = "danger";
  nameColor: string = "danger";
  amountColor: string ="danger";

  //pridat ostatne 
  constructor(private navController: NavController,private toastController: ToastController) { }

  ngOnInit() {
  }

//////////////// VALIDATORY ///////////
ibanUpdated() {
  console.log("Iban checked");
  if(this.receiverIBAN !== null && this.receiverIBAN.match(/^[A-Z]{2}[0-9]{15,32}$/g)) {    ////IBAN STANDARD ACCORDING TO iban.com/structure
    console.log("IBAN OK");
    this.ibanColor = "primary";
    return true;
  } else {
    this.ibanColor = "danger";
    console.log("IBAN False");
    return false;
    
  }
}

receivernameUpdated() {
  if(this.receiverName !== null && this.receiverName.match(/[A-z]{1,20}/g)) {
  console.log("NAME OK");
  this.nameColor = "primary";
  return true;
  } else {
  this.nameColor = "danger";
  console.log("Name False");
  return false;
  }
}

///  validAmount() {
//   return this.profile.userBalance-this.amount > 0 && this.amount > 1 ;
// }

validAmount() {
if(this.amount !== null  && this.amount > 0)
{
console.log("amount OK");
this.amountColor = "primary";
return true;
}
else
{
  this.amountColor = "danger";
  console.log("amount False");
  return false;
}
  }


///////////////////////////////////////////////////////

  generateQR() {

    if( this.receivernameUpdated() && this.ibanUpdated() && this.validAmount() ) {
    const finalObject = {
      //receiverId: this.receiverId,
      receiverIBAN: this.receiverIBAN,
      receiverName: this.receiverName,
      amount: this.amount,
      message: 'From QR Code'
    }
    this.qrCodeText=JSON.stringify(finalObject);
    console.log("QR OK");
    this.presentToast("QR code generated sucessfully")
  }

  else{
      
    this.presentToast(`${this.getFinalMissingData()}`);
  }


}

getFinalMissingData(): string {
  let finalString = '';
  if(!this.ibanUpdated()) {
    finalString+= ' Invalid IBAN '
  }
  if(!this.validAmount()) {
    finalString+= ' invalid Amount '
  }
  if(!this.receivernameUpdated()){
    finalString+= ' invalid Name' 
  }
  
  
  return finalString;
}

  returnToProfileButtonOnclick(){
    this.navController.navigateRoot("tabs/tab1");
  }




  async presentToast(toastMessage:string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 10000
    });
    toast.present();
  }

}
