import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MemoItem} from "../add-memo/models/addMemo.interface";
import {AddMemo} from "../add-memo/services/addMemo";
import {NgModel} from "@angular/forms";

/**
 * Generated class for the EditMemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-memo',
  templateUrl: 'edit-memo.html',
})
export class EditMemoPage {

    item: MemoItem = {

        name: '',
        lat: this.mapService.lat,
        lng: this.mapService.lng
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, public mapService: AddMemo) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');

  }

  submitEdit(item: MemoItem) {
      this.mapService.editMemoData(item).then(() => {
          this.navCtrl.pop();
      });
  }

  submitDelete(item: MemoItem) {
      this.mapService.removeMemoData(item).then(() => {
          this.mapService.removeMarker(item);
          this.navCtrl.pop();
      });
  }

}
