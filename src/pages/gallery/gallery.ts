import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {PuppiesPage} from "../puppies/puppies";
import {KittensPage} from "../kittens/kittens";
import {OthersPage} from "../others/others";
import {LostNfoundPage} from "../lostNfound/lostNfound";


@Component({
    selector: 'page-gallery',
    templateUrl: 'gallery.html'
})
export class GalleryPage {
    galleryType = 'regular';
    constructor(public navCtrl: NavController) {

    }
    goToPuppies(){
        this.navCtrl.push(PuppiesPage);
    };
    goToKittens(){
        this.navCtrl.push(KittensPage);
    };
    goToOthers(){
        this.navCtrl.push(OthersPage);
    };
    goToLostNFound(){
        this.navCtrl.push(LostNfoundPage);
    };
}
