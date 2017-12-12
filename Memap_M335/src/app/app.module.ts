import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, NavController, NavParams} from 'ionic-angular';
import { MyApp } from './app.component';

import { MapPage } from '../pages/map/map';
import { ChatsPage } from '../pages/chats/chats';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2'
import { initializeApp } from 'firebase/app';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from "angularfire2/auth";
import {AudioRecorder} from "../pages/add-memo/services/audiorecorder";
import {AngularFireDatabase} from "angularfire2/database-deprecated";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";

import {ViewChild} from "@angular/core";
import {AddMemo} from "../pages/add-memo/services/addMemo";
import {AddMemoPage} from "../pages/add-memo/add-memo";

import {NgModel} from "@angular/forms";
import {MediaPlugin} from "ionic-native";
import {Media} from "@ionic-native/media";


@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ChatsPage,
    HomePage,
    TabsPage,
    AddMemoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    ChatsPage,
    HomePage,
    TabsPage,
    AddMemoPage
  ],
  providers: [
    StatusBar,
    MapPage,
    SplashScreen,
    Geolocation,
    AddMemo,
    AngularFireDatabase,
    AngularFireAuth,
    AddMemoPage,
    NgModel,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
