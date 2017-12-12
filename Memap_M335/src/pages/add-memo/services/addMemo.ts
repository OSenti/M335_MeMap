import {MapPage} from "../../map/map";
import {AngularFireAuth} from "angularfire2/auth";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {AddMemoPage} from "../add-memo";
import {google} from 'google-maps';
import {Injectable} from "@angular/core";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

import {Firebase} from "ionic-native";

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

    editMemoData(memoitem: MemoItem){
        return this.memoListRef.update(memoitem.key, memoitem);
    }

    removeMemoData(memoitem: MemoItem){
        return this.memoListRef.remove(memoitem.key);
    }

    removeMarker(memoitem: MemoItem){
        if(this.content = memoitem.name){
            this.marker.setMap(null);
        }
    }

    map: any;

    userId = this.Auth.auth.currentUser;
    lat: number;
    lng: number;

    memoicon: any;

    latlng: any;

    content: string;

    marker: any;

    Initialization: any;

    getInitialization(){

        return this.Initialization;

    }

    addMemoMarker(){

        this.marker = new google.maps.Marker({
            position: this.latlng,
            map: this.map,
            title: this.content,
            icon: this.memoicon
        });

        this.marker.setMap(Map);
    }

}