import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtPSHEXPkqfrP5F42_kjMSCiH6b5rGGgQ",
  authDomain: "senior-design-tilt.firebaseapp.com",
  databaseURL: "https://senior-design-tilt-default-rtdb.firebaseio.com",
  projectId: "senior-design-tilt",
  storageBucket: "senior-design-tilt.appspot.com",
  messagingSenderId: "564989379674",
  appId: "1:564989379674:web:4ef854b8aae1e31655c463",
  measurementId: "G-J1LG6Y23LS"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
