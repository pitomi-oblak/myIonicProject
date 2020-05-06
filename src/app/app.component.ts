import {Component, ViewChild} from '@angular/core';

import {Platform, MenuController, Nav, PopoverController} from 'ionic-angular';

import {HomePage} from '../pages/home/home';
import {GalleryPage} from "../pages/gallery/gallery";
import {AddPage} from "../pages/add/add";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PopoverPage} from "../pages/popover/popover";



@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage = HomePage;
    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform,
                public menu: MenuController,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                public popoverCtrl:PopoverController) {
        this.initializeApp();

        // set our app's pages
        this.pages = [
            {title: 'Pocetna', component: HomePage},
            {title: 'Galerija', component: GalleryPage},
            {title: 'Dodaj Ljubimca', component: AddPage}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}
