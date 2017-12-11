import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth"
import { Toast } from 'ionic-angular/components/toast/toast';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  constructor(private toast: ToastController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User)
  {
    if(user.password == user.repPassword)
    {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(() => 
      {
        this.toast.create(
          {
            message: "Sie haben sich erfolgreich registriert!",
            duration: 3000,
            position: 'top',
            showCloseButton: true
          }).present();
        console.log(result);
        this.navCtrl.setRoot(LoginPage);

      },
      error =>
      {
        console.error(result);        
        this.toast.create(
        {
          message: "Etwas stimmt mit Ihren Eingaben nicht!",
          duration: 3000,
          position: 'top',
          showCloseButton: true
        }).present();
      });


    }
    else
    {
           
      this.toast.create(
      {
        message: "Die Passwörter stimmen nicht überein!",
        duration: 3000,
        position: 'top',
        showCloseButton: true
      }).present();
    }


    


  }

}
