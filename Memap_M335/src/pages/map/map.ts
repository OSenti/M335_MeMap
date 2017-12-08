import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import {google} from 'google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { CurrentLoc } from '../../interfaces/current-loc';


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
export class MapPage {

  map: google.maps.Map;
  currentLoc: CurrentLoc = {lat:0 , lon: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public geolocation: Geolocation) {
      this.map = null;

      geolocation.getCurrentPosition().then(pos => {
          console.log('lat: ' + pos.coords.latitude + ', lon: ' +
              pos.coords.longitude);
      });

      geolocation.getCurrentPosition().then(pos => {
          console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          this.currentLoc.lat = pos.coords.latitude;
          this.currentLoc.lon = pos.coords.longitude;
          this.currentLoc.timestamp = pos.timestamp;
      });
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.initializeMap();
    });
  }

    initializeMap() {
        let minZoomLevel = 3;
        this.map = new
        google.maps.Map(document.getElementById('map_canvas'), {
            zoom: minZoomLevel,
            minZoom: 17,
            maxZoom: 19,
            center: new google.maps.LatLng(47.413041 ,9.631689),
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }

}
