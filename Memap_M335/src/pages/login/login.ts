import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth"
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
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
    try
    {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      this.toast.create
      ({
        message: "Sie sind nun erfolgreich engeloggt!",
        duration: 3000
      }).present()
      this.navCtrl.setRoot("tabsPage");
    }
    catch(e)
    {
      console.error(e);

    }
  }

  register()
  {
    this.navCtrl.push("RegisterPage");
  }


  

}
