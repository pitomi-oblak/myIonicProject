import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-lostFound',
    templateUrl: 'lostNfound.html'
})
export class LostNfoundPage {
    galleryType = 'regular';
    constructor(public navCtrl: NavController) {
    }
}