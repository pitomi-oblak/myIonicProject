import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-kittens',
    templateUrl: 'kittens.html'
})
export class KittensPage {
    galleryType = 'regular';
    constructor(public navCtrl: NavController) {
    }
}