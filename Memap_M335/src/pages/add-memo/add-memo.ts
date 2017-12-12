import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AudioRecorder, AudioRecorderState } from "./services/audiorecorder";
import {MediaPlugin} from "ionic-native";
import {MapPage} from "../map/map";
import {TabsPage} from "../tabs/tabs";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import * as firebase from "firebase";
import {google} from "google-maps";

import {Observable} from "rxjs/Observable";
import {AddMemo} from "./services/addMemo";
import {MemoItem} from "./models/addMemo.interface";
import {Media, MediaObject} from "@ionic-native/media";


/**
 * Generated class for the AddMemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-memo',
  templateUrl: 'add-memo.html',
  })

export class AddMemoPage {

    item: MemoItem = {

        name: '',
        lat: this.mapService.lat,
        lng: this.mapService.lng
    };

    AudioRecorderState = AudioRecorderState;


    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public media: Media, public afAuth: AngularFireAuth, public database: AngularFireDatabase, public mapService: AddMemo) {



    }


    file: MediaObject = this.media.create('../../../www/assets/audio' + this.mapService.content + '.mp3');

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddMemoPage');
    }

    ionViewDidEnter() {
        console.log('Wanna Add a Memo?')
    }

    startRecording() {
        try {
            this.file.startRecord();
        }
        catch (e) {
            this.showAlert('Could not start recording.');
        }
    }

    stopRecording() {
        try {
            this.file.stopRecord();
        }
        catch (e) {
            this.showAlert('Could not stop recording.');
        }
    }

    startPlayback() {
        try {
            this.file.setVolume(0.7);
            this.file.play();
        }
        catch (e) {
            this.showAlert('Could not play recording.');
        }
    }

    stopPlayback() {
        try {
            this.file.resumeRecord();
        }
        catch (e) {
            this.showAlert('Could not stop playing recording.');
        }
    }

    showAlert(message) {
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

    submitMemo(memoItem: MemoItem) {

        this.mapService.addMemoData(memoItem).then(ref => {

            console.log(ref.key);

        });

        this.mapService.content = memoItem.name;


        this.mapService.addMemoMarker();

        this.navCtrl.pop();

        this.mapService.getInitialization();
    }
}
