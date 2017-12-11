import {MapPage} from "../../map/map";
import {AngularFireAuth} from "angularfire2/auth";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {AddMemoPage} from "../add-memo";
import {google} from 'google-maps';
import {Injectable} from "@angular/core";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

import {MemoItem} from "../models/addMemo.interface";


@Injectable()
export class AddMemo {

    public memoListRef = this.db.list<MemoItem>('/memos/');

    constructor(public alertCtrl: AlertController, public Auth: AngularFireAuth, public db: AngularFireDatabase) {

    }


    getMemoList(){
        return this.memoListRef;
    }

    addMemoData(memoitem: MemoItem){
        return this.memoListRef.push(memoitem)
    }


    map: any;

    userId = this.Auth.auth.currentUser;
    lat: number;
    lng: number;

    memoicon: any;

    latlng: any;

    content: string;

    marker: any;

    addMemoMarker(){

        this.marker = new google.maps.Marker({
            position: this.latlng,
            map: this.map,
            title: this.content,
            icon: this.memoicon
        });
    }

}