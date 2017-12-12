import {Component, OnInit} from "@angular/core";
import { IonicPage, NavController, Platform } from 'ionic-angular';

import {Inject} from "@angular/core";

import {google} from 'google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { CurrentLoc } from '../../interfaces/current-loc';

import { AddMemoPage} from "../add-memo/add-memo";
import {AngularFireDatabase} from "angularfire2/database-deprecated";
import {AngularFireAuth} from "angularfire2/auth";

import {AddMemo} from "../add-memo/services/addMemo";

import {ViewChild} from "@angular/core";

import {FirebaseProvider} from "../../providers/firebase/firebase";
import * as firebase from "firebase";


let currentLoc: CurrentLoc;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage implements OnInit{

    @ViewChild('Nav') nav: NavController;

    lat: number;
    lon: number;

    ngOnInit(){
        this.geolocation.getCurrentPosition().then(pos => {
            console.log('lat1: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            this.setlat(+pos.coords.latitude);
            this.setlon(+pos.coords.longitude);

            console.log('lat2: ' + this.lat + ', lon: ' + this.lon);
        });
    }

    setlat(lat:number){
        this.lat = lat;
    }
    getlat(){
        console.log('lat3: ' + this.lat.toString());
    }

    setlon(lon:number){
        this.lon = lon;
    }
    getlon(){
        console.log('lon3: ' + this.lon);
    }

  map: google.maps.Map;
  posmarker: google.maps.Marker;
  memomarker: google.maps.Marker;
  currentLoc: CurrentLoc = {lat:0 , lon: 0};

  constructor(public navCtrl: NavController, public platform: Platform, public geolocation: Geolocation, public db: AngularFireDatabase, public Auth: AngularFireAuth, public Memoinfo: AddMemo) {
      this.map = null;
      this.posmarker = null;
      this.Memoinfo.Initialization = this.initializeMap();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.initializeMap();
    });
  }

    initializeMap() {
        let minZoomLevel = 3;
        this.geolocation.getCurrentPosition().then(pos => {
            console.log('lat1: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            this.setlat(+pos.coords.latitude);
            this.setlon(+pos.coords.longitude);

            console.log('lat3: ' + this.lat + ', lon: ' + this.lon);

            this.map = new
            google.maps.Map(document.getElementById('map_canvas'), {
                zoom: minZoomLevel,
                minZoom: 17,
                maxZoom: 19,
                center: new google.maps.LatLng(this.lat, this.lon),
                mapTypeControl: true,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: false,
                overviewMapControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var mylatlng = {lat: this.lat, lng: this.lon};

            var MyPosIcon = 'https://cdn2.iconfinder.com/data/icons/snipicons/500/';
            var MemoPosIcon = 'https://cdn.pixabay.com/photo/2013/07/13/01/09/map-155198_960_720.png';
            var icons = {
                me: {
                    icon: MyPosIcon + 'map-marker-48.png'
                },
                memo: {
                    icon: MemoPosIcon
                }
            };

            this.posmarker = new
            google.maps.Marker({
               position: mylatlng,
               map: this.map,
               title: 'Your Position',
               icon: icons.me.icon
            });
        });
    }

    addMemo(){
      this.Memoinfo.map = this.map;
      this.Memoinfo.lat = this.lat;
      this.Memoinfo.lng = this.lon;
      this.Memoinfo.latlng = {lat: this.lat, lng: this.lon};
      this.Memoinfo.memoicon = 'https://cdn0.iconfinder.com/data/icons/mtt-web-icons/139/microphone-48.png';


      this.navCtrl.push(AddMemoPage);
    }
}
