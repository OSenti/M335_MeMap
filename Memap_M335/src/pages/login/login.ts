import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth"
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import  {TabsPage } from '../tabs/tabs'
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Toast } from 'ionic-angular/components/toast/toast';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;


  constructor(private toast: ToastController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User)
  {
    
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => 
      {
        this.toast.create(
          {
            message: "Sie sind nun eingeloggt!",
            duration: 3000,
            position: 'top',
            showCloseButton: true
          }).present();
        console.log(result);
        this.navCtrl.setRoot(TabsPage);

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

  register()
  {
    this.navCtrl.push("RegisterPage");
  }


  

}
