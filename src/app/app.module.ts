import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { MapComponent } from './map/map.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { config } from 'rxjs';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';
import { AuthService } from './auth.service';
import { EventService } from './event.service';

import { AgmCoreModule } from '@agm/core';
import { LoginPageComponent } from './login-page/login-page.component';

const CONFIG: FirebaseAppConfig = {
  apiKey: 'AIzaSyAJfPJewaeg0gSxAutDCnc0MrP9TdntznM',
  authDomain: 'ouipick-813a6.fi rebaseapp.com',
  databaseURL: 'https://ouipick-813a6.firebaseio.com',
  projectId: 'ouipick-813a6',
  storageBucket: 'ouipick-813a6.appspot.com',
  messagingSenderId: '523366810226'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EventComponent,
    MapComponent,
    NotfoundComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrD0R_eOxWPiLUE0UMT3RMufoVZcRmvmM'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
