import {Component, OnInit} from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import {google} from 'google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { CurrentLoc } from '../../interfaces/current-loc';

import {FirebaseProvider} from "../../providers/firebase/firebase";


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
  templateUrl: 'map.html',
})
export class MapPage implements OnInit{


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
  currentLoc: CurrentLoc = {lat:0 , lon: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public geolocation: Geolocation) {
      this.map = null;
      this.posmarker = null;
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
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var mylatlng = {lat: this.lat, lng: this.lon};


            var contentString = '<div style="width: 500px">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Add new Memo</h1>'+
                '<div id="bodyContent">'+
                '<p><h1>Test</h1>' +
                '<form method="post">' +
                '<ion-item>' +
                '<ion-label color="primary">Inline Label</ion-label>'+
                '<ion-input placeholder="Text Input"></ion-input>'+
                '</ion-item>' +
                '<button ion-button type="submit" block>Add User</button>' +
                '</form>' +
                '</p>'+
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });


            var MyPosIcon = 'https://cdn1.iconfinder.com/data/icons/hawcons/32/';
            var MemoPosIcon = 'https://maps.google.com/mapfiles/kml/shapes/';
            var icons = {
                me: {
                    icon: MyPosIcon + '698847-icon-12-mail-add-48.png'
                },
                memo: {
                    icon: MemoPosIcon + 'library_maps.png'
                }
            };

            this.posmarker = new
            google.maps.Marker({
               position: mylatlng,
               map: this.map,
               title: 'Your Position',
               icon: icons.me.icon
            });

            this.posmarker.addListener('click', function() {

                infowindow.open(this.map, this.posmarker);
                infowindow.setPosition(mylatlng);

            });

        });
    }
}
