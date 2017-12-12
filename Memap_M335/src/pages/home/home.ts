import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddMemo} from "../add-memo/services/addMemo";
import {Observable} from "rxjs/Observable";
import {MemoItem} from "../add-memo/models/addMemo.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  memos$: Observable<MemoItem[]>

  constructor(public navCtrl: NavController, public memos: AddMemo) {

    this.memos$ = this.memos
        .getMemoList()
        .snapshotChanges()
        .map(
            changes => {
              return changes.map(c => ({
                  key: c.payload.key, ...c.payload.val()
              }))
            }
        )

  }

}