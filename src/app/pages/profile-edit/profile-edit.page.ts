import { Component, OnInit } from '@angular/core';
import { NavController ,ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { User } from '../../user';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  profile: User = new User();
  constructor(private storage: Storage, private navController: NavController,private toastController: ToastController) {}

  UserNameColor: string = 'danger';
  UserSurnameColor: string = 'danger';
  UserEmailColor: string = 'danger';
  UserPhoneColor: string = 'danger';
ngOnInit() {
      this.storage.get('user').then((val) => {
      this.profile = JSON.parse(val); }
      );
  }

  
  
  userNameChange() {
    if(this.profile.userName !== null && this.profile.userName.match(/[A-z]{1,20}/g)) {
    console.log("USER NAME OK");
    this.UserNameColor = "primary";
    return true;
    } 
    else {
    this.UserNameColor = "danger";
    console.log("USER Name False");
    return false;
    }
  }
  userSurnameChange() {
    if(this.profile.userSurname !== null && this.profile.userSurname.match(/[A-z]{1,20}/g)) {
    console.log("USER Surname OK");
    this.UserSurnameColor = "primary";
    return true;
    } 
    else {
    this.UserSurnameColor = "danger";
    console.log("USER Surname False");
    return false;
    }
  }
  userEmailChange(){
    if(this.profile.userEmail !== null && this.profile.userEmail.match(/^.{1,30}[@]{1}.{1,30}[.]{1}.{1,5}$/g)) {
    console.log("USER Email OK");
    this.UserEmailColor = "primary";
    return true;
    } 
    else {
    this.UserEmailColor = "danger";
    console.log("USER Email False");
    return false;
    }
  }
  userPhonenumChange()
  {
    if(this.profile.userPhonenum !== null && this.profile.userPhonenum.match(/[[0-9]{1,15}/g)) //ITU-T in their recommendation E.164. say telephone numbers should not exceed 15 digits.
    {  
    console.log("USER Phone OK");
    this.UserPhoneColor = "primary";
    return true;
    } 
    else {
    this.UserPhoneColor = "danger";
    console.log("USER Phone False");
    return false;
    }
  }


  saveValuesButtonOnclick() {
    if (this.userNameChange() && this. userSurnameChange() && this.userEmailChange() && this.userPhonenumChange() ){
    this.storage.set("user", JSON.stringify(this.profile));
    
    console.log('User Save Success');
    
    this.presentToast("Changes Saved")
    }
   /*  else {
      this.presentToast("err")
    }
  }
*/
  
  else{   
    this.presentToast(`${this.getFinalMissingData()}`);
  }
  }

  getFinalMissingData(): string {
    let finalString = '';
    if(!this.userNameChange()) {
      finalString+= ' Invalid Name '
    }
    if(!this.userSurnameChange()) {
      finalString+= ' invalid Surname '
    }
    if(!this.userEmailChange()){
      finalString+= ' invalid E-mail' 
    }
    if(!this.userPhonenumChange()){
      finalString+= ' invalid Phone number' 
    }
    
    return finalString;
  }



async presentToast(toastMessage:string) {
  const toast = await this.toastController.create({
    message: toastMessage,
    duration: 3000
  });
  toast.present();
}

  returnToProfileButtonOnclick(){
    this.navController.navigateRoot("tabs/tab1");
  }
}
