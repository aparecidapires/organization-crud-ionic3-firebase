import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'; 

// import { CreatePage } from '../pages/create/create';
// import { DetailPage } from '../pages/detail/detail';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { OrganizationProvider } from '../providers/organization/organization';

const firebaseConfig = {
  apiKey: "AIzaSyAl3bm6rtRn3dnEi-8W-9SCeBNaamEngTs",
  authDomain: "meu-projeto-ca594.firebaseapp.com",
  databaseURL: "https://meu-projeto-ca594.firebaseio.com",
  projectId: "meu-projeto-ca594",
  storageBucket: "meu-projeto-ca594.appspot.com",
  messagingSenderId: "731918315544"
};


@NgModule({
  declarations: [
    // CreatePage,
    // DetailPage,
    HomePage,
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // CreatePage,
    // DetailPage,
    HomePage,
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrganizationProvider
  ]
})
export class AppModule {}
