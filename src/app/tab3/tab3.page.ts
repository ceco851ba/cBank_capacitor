import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { User } from '../user';
import { Storage } from '@ionic/storage';
import { MyTransaction } from '../my-transaction';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  TransactionsList : MyTransaction[] = new Array ();
  profile:User = new User();
  receiverId:number = 0; // PLATBA --> ID:0 prijem ID:1
  transactionCategory:string ='Nezaradene';
  senderIBAN: string ='SK5217992356436464634643'; //my default IBAN
  receiverIBAN: string =null;
  receiverName: string =null;
  message:string =null;
  amount:number =null;
  ibanColor: string = "danger";
  nameColor: string = "danger";
  amountColor: string ="danger";
  constructor(private barcodeScanner: BarcodeScanner, private navController: NavController,private storage: Storage,private toastController: ToastController) 
  {
    this.storage.get('user').then((val) => {
      this.profile = JSON.parse(val);
    });

      this.storage.get('transactions').then((val) => {
      this.TransactionsList = JSON.parse(val);
    });
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
  if(this.amount !== null && this.profile.userBalance-this.amount > 0 && this.amount > 0)
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
  async presentToast2(data) {
    const toast = await this.toastController.create({
      message: JSON.stringify(data),
      duration: 2000
    });
    toast.present();
  }
//////////////////////////////////QR CODE SCAN/////////////////
  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      //this.presentToast2(barcodeData);  ////////////////
      const qrData = JSON.parse(barcodeData.text);
     // this.receiverId = qrData.receiverId || null;
      this.receiverIBAN = qrData.receiverIBAN || null;
      this.receiverName = qrData.receiverName || null;
      this.amount = qrData.amount || null;
      this.message =qrData.message || null;
     
     }).catch(err => {
        this.presentToast2(err);
         console.log('QR Error', err);
     });
  }
/////////////////////////////////////////////////////////////////
  transactionIdGenerator(){
    let transID = 0;
    this.TransactionsList.forEach(transaction => {
      if(transaction.transactionId > transID){
        transID = transaction.transactionId;
      }
    });
    return transID + 1;
  }

  

  CreateNewTransactionButtonOnclick(){
    let transId = this.transactionIdGenerator();
    let sendId = this.profile.userId;
    console.log("Send new transaction btn clicked! transaction id: "+ transId);
    if( this.receivernameUpdated() && this.ibanUpdated() && this.validAmount()&& this.receiverId !== null && this.amount !== null && this.receiverIBAN !== null && this.receiverName !== null ){
      this.TransactionsList.push(new MyTransaction().generateTransaction(transId, sendId, this.receiverId,this.senderIBAN,this.receiverIBAN,this.receiverName,this.amount, this.transactionCategory,this.message,Date.now()));
      this.storage.set("transactions", JSON.stringify(this.TransactionsList));
      this.profile.userBalance = this.profile.userBalance - this.amount;
      this.storage.set("user", JSON.stringify(this.profile));
      //this.presentToast("Transaction recieved by the bank.");
      this.presentToast(`${this.getFinalTransactionOK()}`);

    }
/*//////////////////////////////////////
public generateTransaction(         ////
    transactionId: number,          ///
    receiverId: number,            ////
    senderId: number,             ////
    senderIBAN: string,            ///
    receiverIBAN: string,           ///
    receiverName: string,         ////  
    amount: number,               ////
    transactionCategory: string,   ///
    message: string,              //
    transactionTimestamp: number
    ) 
  //////////////////////////////////    ), */

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

  getFinalTransactionOK(): string {
    let finalOKString = 'Transaction received by the bank. Your Account ballance : ';
    finalOKString+= this.profile.userBalance;
    finalOKString+= '€';
    return finalOKString;

  }


  async presentToast(toastMessage:string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 10000
    });
    toast.present();
  }
  

  gotoTransButtonOnclick(){
    this.navController.navigateRoot("tabs/tab2");
  }


  returnToProfileButtonOnclick(){
    this.navController.navigateRoot("tabs/tab1");
  }

}
