import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { User } from './user';
import { MyTransaction } from './my-transaction';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    Ng2GoogleChartsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
driverOrder: [ 'sqlite', 'indexeddb', 'websql']
    }),],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  TransactionsList : MyTransaction[] = new Array ();
  profile:User = new User();

  

constructor(private storage: Storage){
  this.GenerateProfile();
this.CreateTransactionList();

}

GenerateProfile(){
  this.storage.get('user').then((val) => {
    if(val === null) {
      this.profile.userId       = 0;
      this.profile.userTitle    = 'Bc.'
      this.profile.userName     = 'Michal';
      this.profile.userSurname  = 'Ceconik';
      this.profile.userTitle2   = '';
      this.profile.userIBAN     = 'SK9221162518545481819831';
      this.profile.userBalance  = 10000;
      this.profile.userAddress  = 'mojaAdresa';
      this.profile.userCity     = 'Bratislava';
      this.profile.userEmail    = 'ceco851ba@gmail.com';
      this.profile.userPhonenum = '0909123123';


      this.storage.set("user", JSON.stringify(this.profile));
    } else {
      console.log('Your json is', val);
      let usr = new User();
      usr = JSON.parse(val);
      this.profile = usr;
      console.log(usr);
    }
  });

  console.log(this.profile);
}

CreateTransactionList(){
  this.storage.get('transactions').then((val) => {
    if(val === null) {
      this.TransactionsList.push(
        new MyTransaction().generateTransaction(
          0,  //trans ID
          1,  // receiver ID  r/s 1/0 --> -  
          0,  // sender ID    r/s 0/1 --> +
          'SK5217992356436464634643', //sender IBAN ///****default User IBAN */
          'SK7364546456454545454544', //receiver IBAN
          'Billa Slovensko', //receiver name
          100,  // amount
          "Obchod", // Transaction type
          "Billa", // message
          1575547562031   // timestamp ISO 8602
          ),
        new MyTransaction().generateTransaction(1,1,0,'SK5217992356436464634643','SK521799134t4t2735342558','Lukoil Slovakia',60,"Auto","PHM",1575547568031),
        new MyTransaction().generateTransaction(2,1,0,'SK4465436567568687878787','SK5217992356436464634643','xxx',355,"ine","zaloha",	1575677560031),
        new MyTransaction().generateTransaction(3,1,0,'SK5217992356436464634643','SK521799134t4t2735342558','Shell Slovakia',58,"Auto","PHM",1575547568033),
        new MyTransaction().generateTransaction(4,1,0,'SK5217992356436464634643','SK4346657575454534634899','Alza',100,"Obchod","stotabletovtyzdenne",1575547560031),
    
      );
      // new MyTransaction().generateTransaction(0,1,0,'NL56INGB7830770891','SK5217991326862735342558',100,"Obchod","message",1572706800),
      this.storage.set("transactions", JSON.stringify(this.TransactionsList));
    }

    else {
      console.log('Your json is', val);
      let usr: Array<MyTransaction> = JSON.parse(val);
      console.log(usr);
      this.TransactionsList = usr;
    }
    
  });

}
 


}