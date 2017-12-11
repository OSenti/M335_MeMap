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

    media: MediaPlugin;
    AudioRecorderState = AudioRecorderState;


    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public audioRecorder: AudioRecorder, public afAuth: AngularFireAuth, public database: AngularFireDatabase, public mapService: AddMemo) {


    }

/*
    ionViewDidLoad() {
        console.log('ionViewDidLoad AddMemoPage');
    }*/

    ionViewDidEnter() {
        this.media = new MediaPlugin('Recs/recording.wav');
    }

    startRecording() {
        try {
            this.audioRecorder.startRecording();
        }
        catch (e) {
            this.showAlert('Could not start recording.');
        }
    }

    stopRecording() {
        try {
            this.audioRecorder.stopRecording();
        }
        catch (e) {
            this.showAlert('Could not stop recording.');
        }
    }

    startPlayback() {
        try {
            this.audioRecorder.startPlayback();
        }
        catch (e) {
            this.showAlert('Could not play recording.');
        }
    }

    stopPlayback() {
        try {
            this.audioRecorder.stopPlayback();
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
        this.mapService.addMemoMarker();

        this.navCtrl.pop();
    }
}
