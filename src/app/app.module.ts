import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {GalleryPage} from "../pages/gallery/gallery";
import {PuppiesPage} from "../pages/puppies/puppies";
import {LostNfoundPage} from "../pages/lostNfound/lostNfound";
import {KittensPage} from "../pages/kittens/kittens";
import {OthersPage} from "../pages/others/others";
import {AddPage} from "../pages/add/add";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';
import {PopoverPage} from "../pages/popover/popover";


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        GalleryPage,
        PuppiesPage,
        KittensPage,
        OthersPage,
        LostNfoundPage,
        AddPage,
        PopoverPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        GalleryPage,
        PuppiesPage,
        KittensPage,
        OthersPage,
        LostNfoundPage,
        AddPage,
        PopoverPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
