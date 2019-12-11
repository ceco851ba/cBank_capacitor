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
  receiverId:number =null;
  transactionCategory:string =null;
  senderIBAN: string ='SK5217992356436464634643'; //my default IBAN
  receiverIBAN: string =null;
  receiverName: string =null;
  message:string =null;
  amount:number =null;

  
  constructor(private barcodeScanner: BarcodeScanner, private navController: NavController,private storage: Storage,private toastController: ToastController) 
  {
    this.storage.get('user').then((val) => {
      this.profile = JSON.parse(val);
    });

      this.storage.get('transactions').then((val) => {
      this.TransactionsList = JSON.parse(val);
    });
  }

  async presentToast2(data) {
    const toast = await this.toastController.create({
      message: JSON.stringify(data),
      duration: 2000
    });
    toast.present();
  }

  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.presentToast2(barcodeData);
      const qrData = JSON.parse(barcodeData.text);
      this.receiverId = qrData.receiverId || null;
      // doplnit ostatne data 
     }).catch(err => {
        this.presentToast2(err);
         console.log('Error', err);
     });
  }

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
    if(this.receiverId !== null && this.amount !== null && this.receiverIBAN !== null && this.receiverName !== null ){
      this.TransactionsList.push(new MyTransaction().generateTransaction(transId, sendId, this.receiverId,this.senderIBAN,this.receiverIBAN,this.receiverName,this.amount, this.transactionCategory,this.message,Date.now()));
      this.storage.set("transactions", JSON.stringify(this.TransactionsList));
      this.profile.userBalance = this.profile.userBalance - this.amount;
      this.storage.set("user", JSON.stringify(this.profile));
      this.presentToast("Transaction recieved by the bank.");
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
    
      this.presentToast("Please fill all required information")
    }
  }


  async presentToast(toastMessage:string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000
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
