import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-others',
    templateUrl: 'others.html'
})
export class OthersPage {
    galleryType = 'regular';
    constructor(public navCtrl: NavController) {
    }
}