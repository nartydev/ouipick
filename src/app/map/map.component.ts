import { Component, OnInit } from "@angular/core";

import { AgmInfoWindow } from "@agm/core/directives/info-window";
import { InfoWindowManager } from "@agm/core/services/managers/info-window-manager";
import { AgmMarker } from "@agm/core/directives/marker";
import { google } from "@agm/core/services/google-maps-types";
import { MouseEvent } from "@agm/core";

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { FirebaseAuth } from '@firebase/auth-types';
import { AuthService } from '../auth.service';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  visibleLogin = 0;

  pointHover = [0, 0, 0, 0];

  // google maps zoom level
  zoom = 8;

  selectCategorie = 5;

  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;

  // tslint:disable-next-line:max-line-length
  imagesCategorie = [
    "../../assets/pointer-red.svg",
    "../../assets/pointer-green.svg",
    "../../assets/pointer-blue.svg",
    "../../assets/pointer-yellow.svg"
  ];

  logoutValue = false;

  markers: Marker[] = [
    {
      id: 0,
      lat: 51.673858,
      lng: 7.815982,
      draggable : true,
      image: this.imagesCategorie[1],
      categorie: 1,
      options : { opacity: 1, draggable: false }
    },
    {
      id: 1,
      lat: 51.373858,
      lng: 7.215982,
      draggable : true,
      image: this.imagesCategorie[2],
      categorie: 2,
      options : { opacity: 1, draggable: true }
    },
    {
      id: 2,
      lat: 51.723858,
      lng: 7.895982,
      draggable : true,
      image: this.imagesCategorie[3],
      categorie: 3,
      options : { opacity: 1, draggable: true }
    },
    {
      id: 3,
      lat: 21.673858,
      lng: 4.815982,
      draggable : true,
      image: this.imagesCategorie[0],
      categorie: 0,
      options : { opacity: 1, draggable: false }
    }
  ];

  userId: any;


  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, public authService: AuthService) {
    this.visibleLogin = 0;
  }

  ngOnInit() {

  }

  // Select right marker to hide/show
  changeCategorie(id) {
    this.selectCategorie = id;
    this.markers.map((markerInfo) => {
      if (markerInfo.categorie !== this.selectCategorie) {
        markerInfo.options.opacity = 0;
      } else {
        markerInfo.options.opacity = 1;
      }
    });
  }

  // Hide/show login form
  changeValueLogin() {
    if (this.visibleLogin === 0) {
      this.visibleLogin = 1;
    } else {
      this.visibleLogin = 0;
    }
  }

  // Show event when click on marker
  showInfo(infoWindow, gm) {
    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }

    gm.lastOpen = infoWindow;

    infoWindow.open();
  }

  mouseEnterPoint(id) {
    this.pointHover[id] = 1;
  }

  mouseLeavePoint(id) {
    this.pointHover[id] = 0;
    console.log(this.selectCategorie);
  }

  logoutUser() {
    this.authService.logout();
    this.logoutValue = true;
    setTimeout(() => {
      this.logoutValue = false;
    }, 5000)
  }

}


// just an interface for type safety.
interface Marker {
  id: number;
  lat: number;
  lng: number;
  draggable: any;
  image: any;
  categorie: number;
  options: any;
}
